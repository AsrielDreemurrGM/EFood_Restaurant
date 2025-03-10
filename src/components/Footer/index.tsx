import { Container, IconWrapper, Information } from './styles';

import logo from '../../assets/images/logo.png';

import { ReactComponent as FacebookIcon } from '../../assets/images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/twitter.svg';

const Footer = () => (
  <Container>
    <img src={logo} alt="Logo" />
    <IconWrapper>
      <InstagramIcon />
      <FacebookIcon />
      <TwitterIcon />
    </IconWrapper>
    <Information>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Information>
  </Container>
);

export default Footer;
