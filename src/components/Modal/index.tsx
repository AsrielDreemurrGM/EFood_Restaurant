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
import pizza from '../../assets/images/pizza.png';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const Modal = ({ isVisible, onClose }: Props) => (
  <ModalContainer className={isVisible ? 'active' : ''}>
    <ModalContent className="globalContainer">
      <CloseIcon onClick={onClose} src={closeIcon} />
      <ProductImage src={pizza} alt="" />
      <ModalWrapper>
        <Title>Pizza Marguerita</Title>
        <Description>
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião.
        </Description>
        <Servings>Serve: de 2 a 3 pessoas</Servings>
        <Button
          text={`Adicionar ao carrinho - R$ 60,90`}
          to="/profile"
          whichPage="profile"
        ></Button>
      </ModalWrapper>
    </ModalContent>
    <div onClick={onClose} className="overlay"></div>
  </ModalContainer>
);

export default Modal;
