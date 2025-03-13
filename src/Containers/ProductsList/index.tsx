import { Container } from './styles';

import Product from '../../components/Product';
import { homeProducts } from '../../Pages/Home';
import { profileProducts } from '../../Pages/Profile';

type Props = {
  whichPage: 'home' | 'profile';
};

export const ProductsList = ({ whichPage }: Props) => {
  const products = whichPage === 'home' ? homeProducts : profileProducts;

  return (
    <Container whichPage={whichPage}>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </Container>
  );
};

export default ProductsList;
