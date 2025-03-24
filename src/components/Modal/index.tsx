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

import { ProductDetails } from '../../Pages/Home';

import { formatPrice } from '../../utils/utils';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  product: ProductDetails | null;
};

const Modal = ({ isVisible, onClose, product }: Props) => (
  <ModalContainer className={isVisible ? 'active' : ''}>
    <ModalContent className="globalContainer">
      <CloseIcon onClick={onClose} src={closeIcon} />
      <ProductImage
        src={product?.capa}
        alt={product?.titulo}
        title={product?.titulo}
      />
      <ModalWrapper>
        <Title>{product?.titulo}</Title>
        <Description>{product?.descricao}</Description>
        <Servings>
          Serve: de {product?.cardapio?.[0]?.porcao || 'Porção não informada'}
        </Servings>
        <Button
          text={`Adicionar ao carrinho - ${formatPrice(
            product?.cardapio?.[0]?.preco
          )}`}
          to="/profile"
          whichPage="profile"
        ></Button>
      </ModalWrapper>
    </ModalContent>
    <div onClick={onClose} className="overlay"></div>
  </ModalContainer>
);

export default Modal;
