import { Culture, HeroImage, DishName, Wrapper } from './styles';

import { captalizeFirstLetter } from '../../utils/utils';

type Props = {
  restaurant: { nome: string; tipo: string; capa: string } | null;
};

const Hero = ({ restaurant }: Props) => {
  return (
    <HeroImage style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <div className="globalContainer">
        <Wrapper>
          <Culture>{captalizeFirstLetter(restaurant?.tipo || '')}</Culture>
          <DishName>{restaurant?.nome}</DishName>
        </Wrapper>
      </div>
    </HeroImage>
  );
};

export default Hero;
