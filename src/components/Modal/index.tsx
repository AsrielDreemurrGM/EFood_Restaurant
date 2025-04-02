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

import { ProfileProducts } from '../../types/products';

import { formatPrice } from '../../utils/utils';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  product: ProfileProducts | null;
};

const Modal = ({ isVisible, onClose, product }: Props) => (
  <ModalContainer className={isVisible ? 'active' : ''}>
    <ModalContent className="globalContainer">
      <CloseIcon onClick={onClose} src={closeIcon} />
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
          onClick={onClose}
          text={`Adicionar ao carrinho - ${formatPrice(product?.preco)}`}
          whichPage="profile"
        ></Button>
      </ModalWrapper>
    </ModalContent>
    <div onClick={onClose} className="overlay"></div>
  </ModalContainer>
);

export default Modal;
