import { Link } from 'react-router-dom';
import { ButtonStyle } from './styles';

export type Props = {
  whichPage: 'home' | 'profile';
  text?: string;
  to: string;
};

const Button = ({ text, whichPage, to }: Props) => {
  const buttonText =
    text ?? (whichPage === 'home' ? 'Saiba mais' : 'Adicionar ao carrinho');
  function defineText() {
    if (whichPage === 'home') {
      text = 'Saiba mais';
      return text;
    }
    text = 'Adicionar ao carrinho';
    return text;
  }
  defineText();
  return (
    <ButtonStyle as={Link} to={to} whichPage={whichPage}>
      {buttonText}
    </ButtonStyle>
  );
};

export default Button;
