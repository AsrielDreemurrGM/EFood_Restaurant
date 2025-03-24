import { useCallback, useEffect, useState } from 'react';

import { ProductDetails } from '../Home';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ProductsList from '../../Containers/ProductsList';
import Modal from '../../components/Modal';

import { getRandomProduct } from '../../utils/utils';

const Profile = () => {
  const [products, setProducts] = useState<ProductDetails[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(
    null
  );

  const [randomProduct, setRandomProduct] = useState<ProductDetails | null>(
    null
  );

  const [modal, setModal] = useState<{ isVisible: boolean }>({
    isVisible: false
  });

  const openModal = (product: ProductDetails) => {
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
      setProducts(data);
      setSelectedProduct(data);

      const randomProduct = getRandomProduct(data);
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
            onProductClick={openModal}
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
