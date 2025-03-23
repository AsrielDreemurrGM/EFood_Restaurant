import ProductDetails from '../../models/ProductDetails';

import Header from '../../components/Header';
import Hero from '../../components/Hero';

import ProductsList from '../../Containers/ProductsList';
import Modal from '../../components/Modal';

import pizza from '../../assets/images/pizza.png';
import { useState } from 'react';

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

const Profile = () => {
  const [modal, setModal] = useState<{ isVisible: boolean }>({
    isVisible: false
  });

  const toggleModal = () =>
    setModal((prev) => ({ isVisible: !prev.isVisible }));

  return (
    <>
      <Header />
      <Hero />
      <div className="globalContainer">
        <ProductsList whichPage="profile" onProductClick={toggleModal} />
      </div>
      <Modal onClose={toggleModal} isVisible={modal.isVisible} />
    </>
  );
};

export default Profile;
