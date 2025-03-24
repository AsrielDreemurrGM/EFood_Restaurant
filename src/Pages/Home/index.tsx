import { useEffect, useState } from 'react';

import Banner from '../../components/Banner';
import ProductsList from '../../Containers/ProductsList';

export type ProductDetails = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  }[];
};

const Home = () => {
  const [products, setProducts] = useState<ProductDetails[]>([]);

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
