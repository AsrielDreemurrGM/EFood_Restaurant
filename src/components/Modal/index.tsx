import { useDispatch } from 'react-redux';

import {
  CloseIcon,
  Description,
  ProductImage,
  ModalContainer,
  ModalContent,
  ModalWrapper,
  Servings,
  Title
} from './styles';

import Button from '../Button';

import closeIcon from '../../assets/images/close-icon.png';

import { formatPrice } from '../../utils/utils';
import { add, open } from '../../store/reducers/cart';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  product: ProfileProducts | null;
};

const Modal = ({ isVisible, onClose, product }: Props) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    if (!product) return;
    dispatch(add(product));
    dispatch(open());
  };

  return (
    <ModalContainer
      className={isVisible ? 'active' : ''}
      aria-hidden={!isVisible}
    >
      <ModalContent className="globalContainer">
        <CloseIcon
          role="button"
          aria-label="Ícone de fechar"
          title="Ícone de fechar"
          onClick={onClose}
          src={closeIcon}
        />
        <ProductImage
          src={product?.foto}
          alt={product?.nome}
          title={product?.nome}
        />
        <ModalWrapper>
          <Title>{product?.nome}</Title>
          <Description>{product?.descricao}</Description>
          <Servings>
            Serve: de {product?.porcao || 'Porção não informada'}
          </Servings>
          <Button
            title={`Adicionar produto ao carrinho ${formatPrice(
              product?.preco
            )}`}
            onClick={() => {
              onClose();
              addProductToCart();
            }}
            $text={`Adicionar ao carrinho - ${formatPrice(product?.preco)}`}
            $whichPage="profile"
          ></Button>
        </ModalWrapper>
      </ModalContent>
      <div onClick={onClose} className="overlay" aria-hidden="true"></div>
    </ModalContainer>
  );
};

export default Modal;
