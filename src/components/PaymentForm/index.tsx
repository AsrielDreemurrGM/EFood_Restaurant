import { useDispatch } from 'react-redux';

import Button from '../Button';

import { cancelPayment, clear, close } from '../../store/reducers/cart';
import { FormContainer, InputWrapper, PurchaseConfirmation } from './styles';
import { useState } from 'react';

const PaymentForm = () => {
  const dispatch = useDispatch();
  const [isPaying, setIsPaying] = useState(false);
  const [finishedPayment, setFinishedPayment] = useState(false);

  const cancel = () => {
    dispatch(cancelPayment());
  };

  const returnToDelivery = () => {
    setIsPaying(false);
  };

  const proceedToPayment = () => {
    setIsPaying(true);
  };

  const finishPayment = () => {
    setFinishedPayment(true);
  };

  const resetCart = () => {
    dispatch(clear());
    dispatch(close());
    dispatch(cancelPayment());
    setFinishedPayment(false);
    setIsPaying(false);
  };

  if (finishedPayment)
    return (
      <PurchaseConfirmation>
        <div>
          <span>Pedido realizado - 123456</span>
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
        <Button whichPage="profile" text="Concluir" onClick={resetCart} />
      </PurchaseConfirmation>
    );

  return (
    <FormContainer>
      {isPaying ? (
        <>
          <form>
            <span>Pagamento</span>
            <InputWrapper>
              <label htmlFor="cardOwner">Nome no cartão</label>
              <input type="text" id="cardOwner" />
            </InputWrapper>
            <div className="input-group">
              <InputWrapper className="card-information">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input type="text" id="cardNumber" />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="cardCode">CVV</label>
                <input type="text" id="cardCode" />
              </InputWrapper>
            </div>
            <div className="input-group">
              <InputWrapper>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input type="text" id="expiresMonth" />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input type="text" id="expiresYear" />
              </InputWrapper>
            </div>
          </form>
          <div className="button-wrapper">
            <Button
              whichPage="profile"
              text="Finalizar pagamento"
              onClick={finishPayment}
            />
            <Button
              whichPage="profile"
              text="Voltar para a edição de endereço"
              onClick={returnToDelivery}
            />
          </div>
        </>
      ) : (
        <>
          <form>
            <span>Entrega</span>
            <InputWrapper>
              <label htmlFor="receiver">Quem irá receber</label>
              <input type="text" id="receiver" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="address">Endereço</label>
              <input type="text" id="address" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" />
            </InputWrapper>
            <div className="input-group">
              <InputWrapper>
                <label htmlFor="postalCode">CEP</label>
                <input type="text" id="postalCode" />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="residenceNumber">Número</label>
                <input type="text" id="residenceNumber" />
              </InputWrapper>
            </div>
            <InputWrapper>
              <label htmlFor="additionalDetails">Complemento (opcional)</label>
              <input type="text" id="additionalDetails" />
            </InputWrapper>
          </form>
          <div className="button-wrapper">
            <Button
              whichPage="profile"
              text="Continuar com o pagamento"
              onClick={proceedToPayment}
            />
            <Button
              whichPage="profile"
              text="Voltar para o carrinho"
              onClick={cancel}
            />
          </div>
        </>
      )}
    </FormContainer>
  );
};

export default PaymentForm;
