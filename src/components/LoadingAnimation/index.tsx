import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../../assets/animations/delivery-bike-loading.json';
import { Container } from './styles';

const LoadingAnimation = () => (
  <Container>
    <Player autoplay loop src={animation} style={{ height: 200, width: 200 }} />
  </Container>
);

export default LoadingAnimation;
