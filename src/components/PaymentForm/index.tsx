import { useDispatch } from 'react-redux';

import Button from '../Button';

import { cancelPayment } from '../../store/reducers/cart';

const PaymentForm = () => {
  const dispatch = useDispatch();

  const cancel = () => {
    dispatch(cancelPayment());
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button whichPage="profile" text="Continuar com o pagamento" />
      <Button
        whichPage="profile"
        text="Voltar para o carrinho"
        onClick={cancel}
      />
    </div>
  );
};

export default PaymentForm;
