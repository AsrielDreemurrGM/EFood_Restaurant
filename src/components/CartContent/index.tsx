import { useDispatch, useSelector } from 'react-redux';

import {
  Product,
  ProductImage,
  ProductList,
  TotalPriceWrapper,
  TrashcanIcon
} from './styles';

import Button from '../Button';

import trashcanIcon from '../../assets/images/trashcan.png';

import { formatPrice } from '../../utils/utils';

import { remove, startPayment } from '../../store/reducers/cart';
import { RootReducer } from '../../store';

const CartComponent = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state: RootReducer) => state.cart);

  const removeProduct = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalValue = () => {
    return products.reduce((acumulator, currentValue) => {
      if (!currentValue.preco) return 0;
      return (acumulator += currentValue.preco);
    }, 0);
  };

  const userIsPaying = () => {
    dispatch(startPayment());
  };

  return (
    <div>
      <ProductList>
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
      <Button
        $whichPage="profile"
        $text="Continuar com a entrega"
        onClick={userIsPaying}
      />
    </div>
  );
};

export default CartComponent;
