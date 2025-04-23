import { BannerBackground, Title } from './styles';

import background from '../../assets/images/background.png';
import logo from '../../assets/images/logo.png';

const Banner = () => (
  <BannerBackground style={{ backgroundImage: `url(${background})` }}>
    <div className="globalContainer">
      <img
        src={logo}
        alt="Logo EFood Restaurant"
        aria-label="Logo do site EFood Restaurant"
      />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </BannerBackground>
);

export default Banner;
