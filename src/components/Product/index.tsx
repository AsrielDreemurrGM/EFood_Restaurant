import {
  Container,
  Image,
  Product,
  Title,
  Description,
  Content
} from './styles';

import sushi from '../../assets/images/sushi.png';
import pasta from '../../assets/images/pasta.png';

const Products = () => (
  <Container>
    <Product>
      <Image src={sushi} alt="Hioki Sushi" title="Hioki Sushi" />
      <Content>
        <Title>Hioki Sushi</Title>
        <Description>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </Description>
      </Content>
    </Product>
    <Product>
      <Image
        src={pasta}
        alt="La Dolce Vita Trattoria"
        title="La Dolce Vita Trattoria"
      />
      <Content>
        <Title>La Dolce Vita Trattoria</Title>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
      </Content>
    </Product>
    <Product>
      <Image
        src={pasta}
        alt="La Dolce Vita Trattoria"
        title="La Dolce Vita Trattoria"
      />
      <Content>
        <Title>La Dolce Vita Trattoria</Title>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
      </Content>
    </Product>
    <Product>
      <Image
        src={pasta}
        alt="La Dolce Vita Trattoria"
        title="La Dolce Vita Trattoria"
      />
      <Content>
        <Title>La Dolce Vita Trattoria</Title>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
      </Content>
    </Product>
    <Product>
      <Image
        src={pasta}
        alt="La Dolce Vita Trattoria"
        title="La Dolce Vita Trattoria"
      />
      <Content>
        <Title>La Dolce Vita Trattoria</Title>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
      </Content>
    </Product>
    <Product>
      <Image
        src={pasta}
        alt="La Dolce Vita Trattoria"
        title="La Dolce Vita Trattoria"
      />
      <Content>
        <Title>La Dolce Vita Trattoria</Title>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
      </Content>
    </Product>
  </Container>
);

export default Products;
