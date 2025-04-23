import { Link } from 'react-router-dom';
import { ButtonStyle } from './styles';

export type Props = {
  $whichPage: 'home' | 'profile';
  $text?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  asLink?: boolean;
  disabled?: boolean;
  title?: string;
};

const Button = ({
  $text,
  $whichPage,
  to = '#',
  onClick,
  type = 'button',
  asLink = true,
  disabled = false,
  title
}: Props) => {
  if (asLink) {
    return (
      <ButtonStyle
        as={Link}
        to={to}
        $whichPage={$whichPage}
        $text={$text}
        onClick={onClick}
        title={title}
      >
        {$text}
      </ButtonStyle>
    );
  }

  return (
    <ButtonStyle
      as="button"
      type={type}
      onClick={onClick}
      $whichPage={$whichPage}
      $text={$text}
      disabled={disabled}
      title={title}
    >
      {$text}
    </ButtonStyle>
  );
};

export default Button;
