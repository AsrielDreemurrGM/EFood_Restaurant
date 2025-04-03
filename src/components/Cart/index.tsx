import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import {
  Container,
  EmptyCartText,
  Overlay,
  Product,
  ProductImage,
  ProductList,
  Sidebar,
  TotalPriceWrapper,
  TrashcanIcon
} from './styles';

import trashcanIcon from '../../assets/images/trashcan.png';

import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart';

import { formatPrice } from '../../utils/utils';

const Cart = () => {
  const dispatch = useDispatch();

  const { products, isOpen } = useSelector((state: RootReducer) => state.cart);

  const closeCart = () => {
    dispatch(close());
  };

  const removeProduct = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalValue = () => {
    return products.reduce((acumulator, currentValue) => {
      if (!currentValue.preco) return 0;
      return (acumulator += currentValue.preco);
    }, 0);
  };

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ProductList>
          {products.length === 0 && (
            <EmptyCartText>O carrinho está vazio...</EmptyCartText>
          )}
          {products.map((product) => (
            <Product key={product.id}>
              <ProductImage
                src={product.foto}
                alt={product.nome}
                title={product.nome}
              />
              <TrashcanIcon
                onClick={() => removeProduct(product.id)}
                src={trashcanIcon}
                alt="Remover"
                title="Remover produto da lista"
              />
              <div>
                <h3>{product.nome}</h3>
                <span>{formatPrice(product.preco)}</span>
              </div>
            </Product>
          ))}
        </ProductList>
        <TotalPriceWrapper>
          <p>Valor Total</p>
          <span>{formatPrice(getTotalValue())}</span>
        </TotalPriceWrapper>
        <Button whichPage="profile" text="Continuar com a entrega" />
      </Sidebar>
    </Container>
  );
};

export default Cart;
