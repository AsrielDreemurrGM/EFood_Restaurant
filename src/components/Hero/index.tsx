import { ProfileProducts } from '../../types/products';

import { Culture, HeroImage, DishName, Wrapper } from './styles';

import { captalizeFirstLetter } from '../../utils/utils';

type Props = {
  product: ProfileProducts | null;
};

const Hero = ({ product }: Props) => {
  return (
    <HeroImage style={{ backgroundImage: `url(${product?.foto})` }}>
      <div className="globalContainer">
        <Wrapper>
          <Culture>{captalizeFirstLetter(product?.tipo || '')}</Culture>
          <DishName>{product?.nome}</DishName>
        </Wrapper>
      </div>
    </HeroImage>
  );
};

export default Hero;
