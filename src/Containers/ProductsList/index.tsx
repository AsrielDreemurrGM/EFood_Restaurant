import Product from '../../components/Product';

import sushi from '../../assets/images/sushi.png';
import pasta from '../../assets/images/pasta.png';
import { Container } from './styles';
import ProductDetails from '../../models/ProductDetails';

const products: ProductDetails[] = [
  new ProductDetails(
    'Japonesa',
    sushi,
    'yes',
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    'Hioki Sushi',
    4.9,
    'knowMore'
  ),
  new ProductDetails(
    'Italiana',
    pasta,
    'no',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'La Dolce Vita Trattoria',
    4.6,
    'knowMore'
  ),
  new ProductDetails(
    'Italiana',
    pasta,
    'no',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'La Dolce Vita Trattoria',
    4.6,
    'knowMore'
  ),
  new ProductDetails(
    'Italiana',
    pasta,
    'no',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'La Dolce Vita Trattoria',
    4.6,
    'knowMore'
  ),
  new ProductDetails(
    'Italiana',
    pasta,
    'no',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'La Dolce Vita Trattoria',
    4.6,
    'knowMore'
  ),
  new ProductDetails(
    'Italiana',
    pasta,
    'no',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'La Dolce Vita Trattoria',
    4.6,
    'knowMore'
  )
];

export const ProductsList = () => (
  <Container>
    {products.map((product, index) => (
      <Product
        dishCulture={product.dishCulture}
        imageSrc={product.imageSrc}
        isWeekBest={product.isWeekBest}
        key={index}
        productDescription={product.productDescription}
        productName={product.productName}
        rating={product.rating}
        typeOfButton={product.typeOfButton}
      />
    ))}
  </Container>
);

export default ProductsList;
