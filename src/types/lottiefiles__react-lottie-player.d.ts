declare module '@lottiefiles/react-lottie-player' {
  import { ComponentType } from 'react';

  interface PlayerProps {
    autoplay?: boolean;
    loop?: boolean;
    src: string | object;
    style?: React.CSSProperties;
    speed?: number;
  }

  export const Player: ComponentType<PlayerProps>;
}
