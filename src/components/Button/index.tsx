import { Link } from 'react-router-dom';
import { ButtonStyle } from './styles';

export type Props = {
  whichPage: 'home' | 'profile';
  text?: string;
  to: string;
  onClick?: () => void;
};

const Button = ({ text, whichPage, to, onClick }: Props) => (
  <ButtonStyle
    onClick={onClick}
    text={text}
    as={Link}
    to={to}
    whichPage={whichPage}
  >
    {text}
  </ButtonStyle>
);

export default Button;
