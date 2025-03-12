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
  dishCulture: string;
  imageSrc: string;
  isWeekBest: 'yes' | 'no';
  productDescription: string;
  productName: string;
  rating: number;
  typeOfButton: 'knowMore' | 'addToCart';
};

const Product = ({
  dishCulture,
  imageSrc,
  isWeekBest,
  productDescription,
  productName,
  rating,
  typeOfButton
}: Props) => (
  <>
    <ProductWrapper>
      <Image src={imageSrc} alt={imageSrc} title={imageSrc} />
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
      <Content>
        <TitleWrapper>
          <Title>{productName}</Title>
          <RatingWrapper>
            <Rating>{rating}</Rating>
            <StarIcon />
          </RatingWrapper>
        </TitleWrapper>
        <Description>{productDescription}</Description>
        <Button to="/profile" buttonType={typeOfButton} />
      </Content>
    </ProductWrapper>
  </>
);

export default Product;
