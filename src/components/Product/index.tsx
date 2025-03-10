import {
  Container,
  Image,
  Product,
  Title,
  Description,
  Content,
  TagWrapper
} from './styles';

import sushi from '../../assets/images/sushi.png';
import pasta from '../../assets/images/pasta.png';
import Tag from '../Tag';
import Button from '../Button';

const Products = () => (
  <Container>
    <Product>
      <Image src={sushi} alt="Hioki Sushi" title="Hioki Sushi" />
      <TagWrapper>
        <Tag text="Destaque da semana" />
        <Tag text="Japonesa" />
      </TagWrapper>
      <Content>
        <Title>Hioki Sushi</Title>
        <Description>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </Description>
        <Button buttonType="knowMore" />
      </Content>
    </Product>
    <Product>
      <Image
        src={pasta}
        alt="La Dolce Vita Trattoria"
        title="La Dolce Vita Trattoria"
      />
      <TagWrapper>
        <Tag text="Italiana" />
      </TagWrapper>
      <Content>
        <Title>La Dolce Vita Trattoria</Title>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
        <Button buttonType="knowMore" />
      </Content>
    </Product>
    <Product>
      <Image
        src={pasta}
        alt="La Dolce Vita Trattoria"
        title="La Dolce Vita Trattoria"
      />
      <TagWrapper>
        <Tag text="Italiana" />
      </TagWrapper>
      <Content>
        <Title>La Dolce Vita Trattoria</Title>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
        <Button buttonType="knowMore" />
      </Content>
    </Product>
    <Product>
      <Image
        src={pasta}
        alt="La Dolce Vita Trattoria"
        title="La Dolce Vita Trattoria"
      />
      <TagWrapper>
        <Tag text="Italiana" />
      </TagWrapper>
      <Content>
        <Title>La Dolce Vita Trattoria</Title>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
        <Button buttonType="knowMore" />
      </Content>
    </Product>
    <Product>
      <Image
        src={pasta}
        alt="La Dolce Vita Trattoria"
        title="La Dolce Vita Trattoria"
      />
      <TagWrapper>
        <Tag text="Italiana" />
      </TagWrapper>
      <Content>
        <Title>La Dolce Vita Trattoria</Title>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
        <Button buttonType="knowMore" />
      </Content>
    </Product>
    <Product>
      <Image
        src={pasta}
        alt="La Dolce Vita Trattoria"
        title="La Dolce Vita Trattoria"
      />
      <TagWrapper>
        <Tag text="Italiana" />
      </TagWrapper>
      <Content>
        <Title>La Dolce Vita Trattoria</Title>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
        <Button buttonType="knowMore" />
      </Content>
    </Product>
  </Container>
);

export default Products;
