import { useDispatch, useSelector } from 'react-redux';

import { Container, Overlay, Sidebar, EmptyCartText } from './styles';

import { RootReducer } from '../../store';
import { close } from '../../store/reducers/cart';

import PaymentForm from '../../components/PaymentForm';
import CartContent from '../../components/CartContent';

const Cart = () => {
  const dispatch = useDispatch();

  const { products, isOpen, isPaying } = useSelector(
    (state: RootReducer) => state.cart
  );

  const closeCart = () => {
    dispatch(close());
  };

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {isPaying ? (
          <PaymentForm />
        ) : products.length === 0 ? (
          <EmptyCartText>
            O carrinho está vazio. Por favor adicione um produto para continuar.
          </EmptyCartText>
        ) : (
          <CartContent />
        )}
      </Sidebar>
    </Container>
  );
};

export default Cart;
