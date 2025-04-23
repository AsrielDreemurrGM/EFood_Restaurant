import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { HomeProducts, ProfileProducts } from '../../types/products';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ProductsList from '../../Containers/ProductsList';
import Modal from '../../components/Modal';
import LoadingAnimation from '../../components/LoadingAnimation';

import { useGetRestaurantsQuery } from '../../services/api';

const Profile = () => {
  const { restaurantId } = useParams();
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  const [selectedProduct, setSelectedProduct] =
    useState<ProfileProducts | null>(null);

  const [modal, setModal] = useState<{ isVisible: boolean }>({
    isVisible: false
  });

  const openModal = (product: ProfileProducts) => {
    setSelectedProduct(product);
    setModal({ isVisible: true });
  };

  const closeModal = () => {
    setModal({ isVisible: false });
    setSelectedProduct(null);
  };

  const selectedRestaurant = restaurants?.find(
    (restaurant) => restaurant.id === parseInt(restaurantId || '', 10)
  );

  if (!selectedRestaurant) {
    return <LoadingAnimation />;
  }

  const restaurantInfo = {
    nome: selectedRestaurant.titulo,
    tipo: selectedRestaurant.tipo,
    capa: selectedRestaurant.capa
  };

  const products = selectedRestaurant.cardapio
    ? selectedRestaurant.cardapio.map((product: ProfileProducts) => ({
        ...product,
        tipo: selectedRestaurant.tipo,
        restaurantId: selectedRestaurant.id
      }))
    : [];

  return (
    <>
      <Header />
      <Hero restaurant={restaurantInfo} />
      <div className="globalContainer">
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <ProductsList
            products={products}
            whichPage="profile"
            onProductClick={(product: ProfileProducts | HomeProducts) =>
              openModal(product as ProfileProducts)
            }
          />
        )}
      </div>
      <Modal
        product={selectedProduct}
        onClose={closeModal}
        isVisible={modal.isVisible}
      />
    </>
  );
};

export default Profile;
