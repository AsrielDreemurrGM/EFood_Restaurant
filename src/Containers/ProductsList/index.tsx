import Product from '../../components/Product';
import { homeProducts } from '../../Pages/Home';

import { Container } from './styles';

export const ProductsList = () => (
  <Container>
    {homeProducts.map((product, index) => (
      <Product
        dishCulture={product.dishCulture}
        imageSrc={product.imageSrc}
        isWeekBest={product.isWeekBest}
        key={index}
        productDescription={product.productDescription}
        productName={product.productName}
        rating={product.rating}
        whichPage={product.whichPage}
      />
    ))}
  </Container>
);

export default ProductsList;
