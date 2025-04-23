import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import InputMask from 'react-input-mask-next';

import Button from '../Button';

import { cancelPayment, clear } from '../../store/reducers/cart';
import {
  ErrorText,
  FormContainer,
  InputWrapper,
  PurchaseConfirmation
} from './styles';

import { usePurchaseMutation } from '../../services/api';
import { RootReducer } from '../../store';
import LoadingAnimation from '../LoadingAnimation';

const PaymentForm = () => {
  const dispatch = useDispatch();
  const [isPaying, setIsPaying] = useState(false);

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation();
  const products = useSelector((state: RootReducer) => state.cart.products);

  const currentYear = new Date().getFullYear();
  const currentYearShort = String(currentYear).slice(-2);

  const deliveryValidation = Yup.object({
    receiver: Yup.string()
      .trim()
      .matches(
        /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
        'O nome não pode conter números ou caracteres especiais'
      )
      .min(5, 'O nome precisa ter pelo menos 5 caracteres')
      .max(70, 'O nome não pode ultrapassar 70 caracteres')
      .required('O nome do destinatário é obrigatório')
      .test(
        'not-only-spaces',
        'O nome não pode estar vazio',
        (value) => value.trim().length > 0
      ),
    address: Yup.string()
      .trim()
      .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
      .max(120, 'O endereço não pode ultrapassar 120 caracteres')
      .required('O Endereço é obrigatório')
      .test(
        'not-only-spaces',
        'O endereço não pode estar vazio',
        (value) => value.trim().length > 0
      ),
    city: Yup.string()
      .trim()
      .matches(
        /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
        'A cidade não pode conter números ou caracteres especiais'
      )
      .min(4, 'A cidade precisa ter pelo menos 4 caracteres')
      .max(60, 'A cidade não pode ultrapassar 60 caracteres')
      .required('A cidade é obrigatória')
      .test(
        'not-only-spaces',
        'O campo não pode estar vazio',
        (value) => value.trim().length > 0
      ),
    postalCode: Yup.string()
      .matches(/^\d{5}-\d{3}$/, 'Formato de CEP inválido (use 00000-000)')
      .required('O CEP é obrigatório'),
    residenceNumber: Yup.string()
      .matches(/^\d+$/, 'O campo deve conter apenas números')
      .min(1, 'O número da residência precisa ter pelo menos 1 número')
      .max(10, 'O número da residência não pode ultrapassar 10 números')
      .required('O número da residência é obrigatório'),
    additionalDetails: Yup.string()
      .min(4, 'O complemento precisa ter pelo menos 4 caracteres')
      .max(80, 'O complemento não pode ultrapassar 80 caracteres')
      .nullable()
  });

  const paymentValidation = Yup.object({
    cardOwner: Yup.string()
      .trim()
      .matches(
        /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
        'O nome não pode conter números ou caracteres especiais'
      )
      .min(5, 'O nome precisa ter pelo menos 5 caracteres')
      .max(40, 'O nome pode ter no máximo 40 caracteres')
      .required('O nome do titular é obrigatório')
      .test(
        'not-only-spaces',
        'O nome não pode estar vazio',
        (value) => value.trim().length > 0
      ),
    cardNumber: Yup.string()
      .required('O número do cartão é obrigatório')
      .min(19, 'O número do cartão deve ter 16 dígitos')
      .max(19, 'O número do cartão deve ter 16 dígitos'),
    cardCode: Yup.string()
      .required('O CVV é obrigatório')
      .min(3, 'O CVV deve ter 3 dígitos')
      .max(3, 'O CVV deve ter 3 dígitos'),
    expiresMonth: Yup.string()
      .required('O mês de vencimento é obrigatório')
      .matches(/^(0[1-9]|1[0-2])$/, 'O mês deve estar entre 01 e 12'),
    expiresYear: Yup.string()
      .required('O ano de vencimento é obrigatório')
      .matches(/^\d{2}$/, 'O ano deve ter 2 dígitos')
      .test('valid-year', 'Ano inválido', (value) => {
        if (!value) return false;
        const input = parseInt(value, 10);
        const min = parseInt(currentYearShort, 10);
        return input >= min;
      })
  });

  const form = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',

      receiver: '',
      address: '',
      city: '',
      postalCode: '',
      residenceNumber: '',
      additionalDetails: ''
    },
    validationSchema: isPaying ? paymentValidation : deliveryValidation,
    onSubmit: async (values) => {
      try {
        purchase({
          products: products.map((product) => ({
            id: product.id,
            price: product.preco
          })),
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.postalCode,
              number: Number(values.residenceNumber),
              complement: values.additionalDetails
            }
          },
          payment: {
            card: {
              name: values.cardOwner,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        });
      } catch (error) {
        console.error('Erro durante a compra:', error);
      }
    }
  });

  const cancel = () => {
    dispatch(cancelPayment());
  };

  const returnToDelivery = () => {
    setIsPaying(false);
  };

  const proceedToPayment = async () => {
    const errors = await form.validateForm();
    if (Object.keys(errors).length === 0) {
      setIsPaying(true);
    } else {
      form.setTouched({
        receiver: true,
        address: true,
        city: true,
        postalCode: true,
        residenceNumber: true
      });
    }
  };

  const resetCart = useCallback(() => {
    dispatch(clear());
    dispatch(cancelPayment());
    setIsPaying(false);
  }, [dispatch, setIsPaying]);

  useEffect(() => {
    if (isSuccess && data) {
      const timer = setTimeout(() => {
        resetCart();
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, data, resetCart]);

  if (isLoading) return <LoadingAnimation />;

  if (isSuccess && data)
    return (
      <PurchaseConfirmation>
        <div>
          <span>Pedido realizado - {data.orderId}</span>
        </div>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p className="marginBottom">
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Button $whichPage="profile" $text="Concluir" onClick={resetCart} />
      </PurchaseConfirmation>
    );

  return (
    <FormContainer onSubmit={form.handleSubmit}>
      {isPaying ? (
        <>
          <span>Pagamento</span>
          <InputWrapper>
            <label htmlFor="cardOwner">Nome no cartão</label>
            <input
              type="text"
              id="cardOwner"
              value={form.values.cardOwner}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              inputMode="text"
            />
            {form.touched.cardOwner && form.errors.cardOwner && (
              <ErrorText className="error">{form.errors.cardOwner}</ErrorText>
            )}
          </InputWrapper>
          <div className="input-group">
            <InputWrapper className="card-information">
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                mask="9999 9999 9999 9999"
                type="text"
                id="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                inputMode="numeric"
              />
              {form.touched.cardNumber && form.errors.cardNumber && (
                <ErrorText className="error">
                  {form.errors.cardNumber}
                </ErrorText>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="cardCode">CVV</label>
              <InputMask
                mask="999"
                type="text"
                id="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                inputMode="numeric"
              />
              {form.touched.cardCode && form.errors.cardCode && (
                <ErrorText className="error">{form.errors.cardCode}</ErrorText>
              )}
            </InputWrapper>
          </div>
          <div className="input-group">
            <InputWrapper>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                mask="99"
                type="text"
                id="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                inputMode="numeric"
              />
              {form.touched.expiresMonth && form.errors.expiresMonth && (
                <ErrorText className="error">
                  {form.errors.expiresMonth}
                </ErrorText>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                mask="99"
                type="text"
                id="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                inputMode="numeric"
              />
              {form.touched.expiresYear && form.errors.expiresYear && (
                <ErrorText className="error">
                  {form.errors.expiresYear}
                </ErrorText>
              )}
            </InputWrapper>
          </div>
          <div className="button-wrapper">
            <Button
              $whichPage="profile"
              $text={isLoading ? 'Processando...' : 'Finalizar pagamento'}
              type="submit"
              asLink={false}
              disabled={isLoading}
            />
            <Button
              $whichPage="profile"
              $text="Voltar para a edição de endereço"
              onClick={returnToDelivery}
              type="button"
            />
          </div>
        </>
      ) : (
        <>
          <span>Entrega</span>
          <InputWrapper>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              type="text"
              id="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              inputMode="text"
            />
            {form.touched.receiver && form.errors.receiver && (
              <ErrorText className="error">{form.errors.receiver}</ErrorText>
            )}
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              inputMode="text"
            />
            {form.touched.address && form.errors.address && (
              <ErrorText className="error">{form.errors.address}</ErrorText>
            )}
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              inputMode="text"
            />
            {form.touched.city && form.errors.city && (
              <ErrorText className="error">{form.errors.city}</ErrorText>
            )}
          </InputWrapper>
          <div className="input-group">
            <InputWrapper>
              <label htmlFor="postalCode">CEP</label>
              <InputMask
                mask="99999-999"
                type="text"
                id="postalCode"
                value={form.values.postalCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                inputMode="numeric"
              />
              {form.touched.postalCode && form.errors.postalCode && (
                <ErrorText className="error">
                  {form.errors.postalCode}
                </ErrorText>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="residenceNumber">Número</label>
              <input
                type="text"
                id="residenceNumber"
                value={form.values.residenceNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                inputMode="numeric"
              />
              {form.touched.residenceNumber && form.errors.residenceNumber && (
                <ErrorText className="error">
                  {form.errors.residenceNumber}
                </ErrorText>
              )}
            </InputWrapper>
          </div>
          <InputWrapper>
            <label htmlFor="additionalDetails">Complemento (opcional)</label>
            <input
              type="text"
              id="additionalDetails"
              value={form.values.additionalDetails}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              inputMode="text"
            />
            {form.touched.additionalDetails &&
              form.errors.additionalDetails && (
                <ErrorText className="error">
                  {form.errors.additionalDetails}
                </ErrorText>
              )}
          </InputWrapper>
          <div className="button-wrapper">
            <Button
              $whichPage="profile"
              $text="Continuar com o pagamento"
              onClick={proceedToPayment}
              type="button"
            />
            <Button
              $whichPage="profile"
              $text="Voltar para o carrinho"
              onClick={cancel}
              type="button"
            />
          </div>
        </>
      )}
    </FormContainer>
  );
};

export default PaymentForm;
