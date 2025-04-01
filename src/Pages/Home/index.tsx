import Banner from '../../components/Banner';
import ProductsList from '../../Containers/ProductsList';

import { useGetRestaurantsQuery } from '../../services/api';
import { HomeProducts } from '../../types/products';

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  return (
    <>
      <Banner />
      <div className="globalContainer">
        {isLoading ? (
          <h2>Carregando...</h2>
        ) : (
          <ProductsList
            whichPage="home"
            products={restaurants as HomeProducts[]}
          />
        )}
      </div>
    </>
  );
};

export default Home;
