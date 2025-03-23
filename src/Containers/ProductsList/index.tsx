import { Container } from './styles';

import Product from '../../components/Product';
import { homeProducts } from '../../Pages/Home';
import { profileProducts } from '../../Pages/Profile';

type Props = {
  whichPage: 'home' | 'profile';
  onProductClick?: () => void;
};

export const ProductsList = ({ whichPage, onProductClick }: Props) => {
  const products = whichPage === 'home' ? homeProducts : profileProducts;

  function defineText() {
    let buttonText = '';
    if (whichPage === 'home') {
      buttonText = 'Saiba mais';
      return buttonText;
    }
    buttonText = 'Adicionar ao carrinho';
    return buttonText;
  }

  return (
    <Container whichPage={whichPage}>
      {products.map((product, index) => (
        <Product
          key={index}
          buttonText={defineText()}
          {...product}
          onClick={onProductClick}
        />
      ))}
    </Container>
  );
};

export default ProductsList;
