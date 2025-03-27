import { useCallback, useEffect, useState } from 'react';

import { HomeProducts, ProfileProducts } from '../../types/products';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ProductsList from '../../Containers/ProductsList';
import Modal from '../../components/Modal';

import { useParams } from 'react-router-dom';

const Profile = () => {
  const { restaurantId } = useParams();

  const [products, setProducts] = useState<ProfileProducts[]>([]);

  const [selectedProduct, setSelectedProduct] =
    useState<ProfileProducts | null>(null);

  const [restaurant, setRestaurant] = useState<{
    nome: string;
    tipo: string;
    capa: string;
  } | null>(null);

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

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/restaurantes'
      );
      if (!response.ok) {
        throw new Error('Error fetching products');
      }
      const data = await response.json();

      const selectedRestaurant = data.find(
        (restaurant: { id: number }) =>
          restaurant.id === parseInt(restaurantId || '', 10)
      );

      if (!selectedRestaurant) {
        setProducts([]);
        setRestaurant(null);
        return;
      }

      setRestaurant({
        nome: selectedRestaurant.titulo,
        tipo: selectedRestaurant.tipo,
        capa: selectedRestaurant.capa
      });

      const filteredProducts = selectedRestaurant.cardapio.map(
        (product: ProfileProducts) => ({
          ...product,
          tipo: selectedRestaurant.tipo,
          restaurantId: selectedRestaurant.id
        })
      );

      setProducts(filteredProducts);
      setSelectedProduct(filteredProducts[0] || null);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, [restaurantId]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <Header />
      <Hero restaurant={restaurant} />
      <div className="globalContainer">
        {!products.length ? (
          <h2>Carregando...</h2>
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
