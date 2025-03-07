import hero from '../../assets/images/hero.png';
import logo from '../../assets/images/logo.png';

import { Image, Title } from './styles';

const Banner = () => (
  <Image style={{ backgroundImage: `url(${hero})` }}>
    <img src={logo} alt="" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </Image>
);

export default Banner;
