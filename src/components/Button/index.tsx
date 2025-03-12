import { Link } from 'react-router-dom';
import { ButtonStyle } from './styles';

export type Props = {
  buttonType: 'knowMore' | 'addToCart';
  text?: string;
  to: string;
};

const Button = ({ text, buttonType, to }: Props) => {
  const buttonText =
    text ??
    (buttonType === 'knowMore' ? 'Saiba mais' : 'Adicionar ao carrinho');
  function defineText() {
    if (buttonType === 'knowMore') {
      text = 'Saiba mais';
      return text;
    }
    text = 'Adicionar ao carrinho';
    return text;
  }
  defineText();
  return (
    <ButtonStyle as={Link} to={to} buttonType={buttonType}>
      {buttonText}
    </ButtonStyle>
  );
};

export default Button;
