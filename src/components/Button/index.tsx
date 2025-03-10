import { ButtonStyle } from './styles';

export type Props = {
  buttonType: 'knowMore' | 'addToCart';
  text?: string;
};

const Button = ({ text, buttonType = 'knowMore' }: Props) => {
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
  return <ButtonStyle buttonType={buttonType}>{buttonText}</ButtonStyle>;
};

export default Button;
