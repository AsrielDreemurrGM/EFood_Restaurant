import { Container } from './styles';

import Product from '../../components/Product';

import { captalizeFirstLetter } from '../../utils/utils';

type Props = {
  $whichPage: 'home' | 'profile';
  onProductClick?: (product: HomeProducts | ProfileProducts) => void;
  products: HomeProducts[] | ProfileProducts[];
};

export const ProductsList = ({
  $whichPage,
  onProductClick,
  products
}: Props) => {
  function defineText() {
    let buttonText = '';
    if ($whichPage === 'home') {
      buttonText = 'Saiba mais';
      return buttonText;
    }
    buttonText = 'Adicionar ao carrinho';
    return buttonText;
  }

  return (
    <Container $whichPage={$whichPage}>
      {products.map((product) => (
        <Product
          restaurantId={
            $whichPage === 'home'
              ? (product as HomeProducts).id
              : (product as ProfileProducts).restaurantId
          }
          $whichPage={$whichPage}
          key={product.id}
          imageSrc={
            $whichPage === 'home'
              ? (product as HomeProducts).capa
              : (product as ProfileProducts).foto
          }
          productName={
            $whichPage === 'home'
              ? (product as HomeProducts).titulo
              : (product as ProfileProducts).nome
          }
          productDescription={
            $whichPage === 'home'
              ? (product as HomeProducts).descricao
              : (product as ProfileProducts).descricao
          }
          dishCulture={
            $whichPage === 'home'
              ? captalizeFirstLetter((product as HomeProducts).tipo)
              : captalizeFirstLetter((product as ProfileProducts).tipo)
          }
          isWeekBest={
            $whichPage === 'home' ? (product as HomeProducts).destacado : false
          }
          rating={
            $whichPage === 'home'
              ? (product as HomeProducts).avaliacao
              : undefined
          }
          buttonText={defineText()}
          onClick={() => {
            onProductClick?.(product);
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
          }}
        />
      ))}
    </Container>
  );
};

export default ProductsList;
