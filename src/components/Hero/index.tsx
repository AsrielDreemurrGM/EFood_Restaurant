import { ProductDetails } from '../../Pages/Home';

import { Culture, HeroImage, DishName, Wrapper } from './styles';

import { captalizeFirstLetter } from '../../utils/utils';

type Props = {
  product: ProductDetails | null;
};

const Hero = ({ product }: Props) => {
  return (
    <HeroImage style={{ backgroundImage: `url(${product?.capa})` }}>
      <div className="globalContainer">
        <Wrapper>
          <Culture>{captalizeFirstLetter(product?.tipo || '')}</Culture>
          <DishName>{product?.titulo}</DishName>
        </Wrapper>
      </div>
    </HeroImage>
  );
};

export default Hero;
