import hero from '../../assets/images/hero.png';
import logo from '../../assets/images/logo.png';

import { Image, Title } from './styles';

const Banner = () => (
  <Image style={{ backgroundImage: `url(${hero})` }}>
    <div className="globalContainer">
      <img src={logo} alt="Logo" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </Image>
);

export default Banner;
