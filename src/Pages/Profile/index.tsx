import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ProductsList from '../../Containers/ProductsList';
import ProductDetails from '../../models/ProductDetails';

import pizza from '../../assets/images/pizza.png';

export const profileProducts: Omit<
  ProductDetails,
  'dishCulture' | 'isWeekBest' | 'rating'
>[] = [
  {
    imageSrc: pizza,
    productDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    productName: 'Pizza Marguerita',
    whichPage: 'profile'
  },
  {
    imageSrc: pizza,
    productDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    productName: 'Pizza Marguerita',
    whichPage: 'profile'
  },
  {
    imageSrc: pizza,
    productDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    productName: 'Pizza Marguerita',
    whichPage: 'profile'
  },
  {
    imageSrc: pizza,
    productDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    productName: 'Pizza Marguerita',
    whichPage: 'profile'
  },
  {
    imageSrc: pizza,
    productDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    productName: 'Pizza Marguerita',
    whichPage: 'profile'
  },
  {
    imageSrc: pizza,
    productDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    productName: 'Pizza Marguerita',
    whichPage: 'profile'
  }
];

const Profile = () => (
  <>
    <Header />
    <Hero />
    <div className="globalContainer">
      <ProductsList whichPage="profile" />
    </div>
  </>
);

export default Profile;
