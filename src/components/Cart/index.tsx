import Button from '../Button';
import {
  Container,
  Overlay,
  Product,
  ProductImage,
  ProductList,
  Sidebar,
  TotalPriceWrapper,
  TrashcanIcon
} from './styles';

import pizza from '../../assets/images/pizza.png';
import trashcanIcon from '../../assets/images/trashcan.png';

const Cart = () => (
  <Container className="is-open">
    <Overlay />
    <Sidebar>
      <ProductList>
        <Product>
          <ProductImage src={pizza} alt="Foto do Prato" title="Foto do Prato" />
          <TrashcanIcon
            src={trashcanIcon}
            alt="Remover produto da lista"
            title="Remover produto da lista"
          />
          <div>
            <h3>Nome do Prato</h3>
            <span>R$ 60,90</span>
          </div>
        </Product>
        <Product>
          <ProductImage src={pizza} alt="Foto do Prato" title="Foto do Prato" />
          <TrashcanIcon
            src={trashcanIcon}
            alt="Ícone De Lixeira"
            title="Remover produto da lista"
          />
          <div>
            <h3>Nome do Prato</h3>
            <span>R$ 60,90</span>
          </div>
        </Product>
        <Product>
          <ProductImage src={pizza} alt="Foto do Prato" title="Foto do Prato" />
          <TrashcanIcon
            src={trashcanIcon}
            alt="Ícone De Lixeira"
            title="Remover produto da lista"
          />
          <div>
            <h3>Nome do Prato</h3>
            <span>R$ 60,90</span>
          </div>
        </Product>
      </ProductList>
      <TotalPriceWrapper>
        <p>Valor Total</p>
        <span>R$ 182,70</span>
      </TotalPriceWrapper>
      <Button whichPage="profile" text="Continuar com a entrega" />
    </Sidebar>
  </Container>
);

export default Cart;
