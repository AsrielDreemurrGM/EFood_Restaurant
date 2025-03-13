import Banner from '../../components/Banner';
import ProductsList from '../../Containers/ProductsList';

import ProductDetails from '../../models/ProductDetails';

import sushi from '../../assets/images/sushi.png';
import pasta from '../../assets/images/pasta.png';

export const homeProducts: ProductDetails[] = [
  new ProductDetails(
    'Japonesa',
    sushi,
    'yes',
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    'Hioki Sushi',
    4.9,
    'home'
  ),
  new ProductDetails(
    'Italiana',
    pasta,
    'no',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'La Dolce Vita Trattoria',
    4.6,
    'home'
  ),
  new ProductDetails(
    'Italiana',
    pasta,
    'no',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'La Dolce Vita Trattoria',
    4.6,
    'home'
  ),
  new ProductDetails(
    'Italiana',
    pasta,
    'no',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'La Dolce Vita Trattoria',
    4.6,
    'home'
  ),
  new ProductDetails(
    'Italiana',
    pasta,
    'no',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'La Dolce Vita Trattoria',
    4.6,
    'home'
  ),
  new ProductDetails(
    'Italiana',
    pasta,
    'no',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    'La Dolce Vita Trattoria',
    4.6,
    'home'
  )
];

const Home = () => (
  <>
    <Banner />
    <div className="globalContainer">
      <ProductsList whichPage="home" />
    </div>
  </>
);

export default Home;
