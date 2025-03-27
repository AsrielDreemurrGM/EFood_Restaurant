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
  buttonText: string;
  imageSrc: string;
  productDescription: string;
  productName: string;
  whichPage: 'home' | 'profile';
  dishCulture?: string;
  isWeekBest?: boolean;
  rating?: number;
  restaurantId?: number;
  onClick?: () => void;
};

const Product = ({
  buttonText,
  dishCulture,
  imageSrc,
  isWeekBest,
  productDescription,
  productName,
  rating,
  whichPage,
  restaurantId,
  onClick
}: Props) => (
  <ProductWrapper whichPage={whichPage}>
    <Image
      whichPage={whichPage}
      src={imageSrc}
      alt={productName}
      title={productName}
    />
    {whichPage === 'home' && dishCulture && (
      <TagWrapper>
        {isWeekBest ? (
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
      <Button
        onClick={onClick}
        text={buttonText}
        to={restaurantId ? `/profile/${restaurantId}` : '/profile'}
        whichPage={whichPage}
      ></Button>
    </Content>
  </ProductWrapper>
);

export default Product;
