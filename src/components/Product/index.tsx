import {
  Image,
  ProductWrapper,
  Title,
  Description,
  Content,
  TagWrapper,
  TitleWrapper,
  RatingWrapper,
  Rating
} from './styles';

import { ReactComponent as StarIcon } from '../../assets/images/star.svg';

import Tag from '../Tag';
import Button from '../Button';

type Props = {
  imageSrc: string;
  productDescription: string;
  productName: string;
  whichPage: 'home' | 'profile';
  dishCulture?: string;
  isWeekBest?: 'yes' | 'no';
  rating?: number;
};

const Product = ({
  dishCulture,
  imageSrc,
  isWeekBest,
  productDescription,
  productName,
  rating,
  whichPage
}: Props) => (
  <ProductWrapper whichPage={whichPage}>
    <Image src={imageSrc} alt={productName} title={productName} />
    {whichPage === 'home' && dishCulture && (
      <TagWrapper>
        {isWeekBest === 'yes' ? (
          <>
            <Tag text="Destaque da semana" />
            <Tag text={dishCulture} />
          </>
        ) : (
          <Tag text={dishCulture} />
        )}
      </TagWrapper>
    )}
    <Content whichPage={whichPage}>
      <TitleWrapper>
        <Title whichPage={whichPage}>{productName}</Title>
        {whichPage === 'home' && typeof rating === 'number' && (
          <RatingWrapper>
            <Rating whichPage={whichPage}>{rating}</Rating>
            <StarIcon />
          </RatingWrapper>
        )}
      </TitleWrapper>
      <Description whichPage={whichPage}>{productDescription}</Description>
      <Button to="/profile" whichPage={whichPage} />
    </Content>
  </ProductWrapper>
);

export default Product;
