import { Container } from './styles';

import Product from '../../components/Product';
import { ProductDetails } from '../../Pages/Home';
import { captalizeFirstLetter } from '../../utils/utils';

type Props = {
  whichPage: 'home' | 'profile';
  onProductClick?: (product: ProductDetails) => void;
  products: ProductDetails[];
};

export const ProductsList = ({
  whichPage,
  onProductClick,
  products
}: Props) => {
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
      {products.map((product) => (
        <Product
          whichPage={whichPage}
          key={product.id}
          imageSrc={product.capa}
          productName={product.titulo}
          productDescription={product.descricao}
          dishCulture={captalizeFirstLetter(product.tipo)}
          isWeekBest={product.destacado}
          rating={product.avaliacao}
          buttonText={defineText()}
          onClick={() => onProductClick?.(product)}
        />
      ))}
    </Container>
  );
};

export default ProductsList;
