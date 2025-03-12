import { Culture, HeroImage, DishName, Wrapper } from './styles';

import hero from '../../assets/images/hero.png';

const Hero = () => (
  <HeroImage style={{ backgroundImage: `url(${hero})` }}>
    <div className="globalContainer">
      <Wrapper>
        <Culture>Italiana</Culture>
        <DishName>La Dolce Vita Trattoria</DishName>
      </Wrapper>
    </div>
  </HeroImage>
);

export default Hero;
