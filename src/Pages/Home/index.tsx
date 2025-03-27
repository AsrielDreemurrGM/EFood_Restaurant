import { useEffect, useState } from 'react';

import Banner from '../../components/Banner';
import ProductsList from '../../Containers/ProductsList';

import { HomeProducts } from '../../types/products';

const Home = () => {
  const [products, setProducts] = useState<HomeProducts[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/restaurantes'
      );
      if (!response.ok) {
        throw new Error('Error fetching products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Banner />
      <div className="globalContainer">
        {!products.length ? (
          <h2>Carregando...</h2>
        ) : (
          <ProductsList whichPage="home" products={products} />
        )}
      </div>
    </>
  );
};

export default Home;
