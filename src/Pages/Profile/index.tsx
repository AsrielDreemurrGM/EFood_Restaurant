import { useCallback, useEffect, useState } from 'react';

import { HomeProducts, ProfileProducts } from '../../types/products';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ProductsList from '../../Containers/ProductsList';
import Modal from '../../components/Modal';

import { getRandomProduct } from '../../utils/utils';

const Profile = () => {
  const [products, setProducts] = useState<ProfileProducts[]>([]);

  const [selectedProduct, setSelectedProduct] =
    useState<ProfileProducts | null>(null);

  const [randomProduct, setRandomProduct] = useState<ProfileProducts | null>(
    null
  );

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

      const allMenus = data.flatMap(
        (restaurant: { tipo: string; cardapio: ProfileProducts[] }) =>
          restaurant.cardapio.map((product) => ({
            ...product,
            tipo: restaurant.tipo
          }))
      );

      setProducts(allMenus);
      setSelectedProduct(allMenus[0] || null);

      const randomProduct = getRandomProduct(allMenus);
      setRandomProduct(randomProduct);
    } catch (error) {
      console.error('Error fetchin products:', error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <Header />
      <Hero product={randomProduct} />
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
