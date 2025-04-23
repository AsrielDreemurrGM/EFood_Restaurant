import Banner from '../../components/Banner';
import LoadingAnimation from '../../components/LoadingAnimation';
import ProductsList from '../../Containers/ProductsList';

import { useGetRestaurantsQuery } from '../../services/api';

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) return <LoadingAnimation />;

  return (
    <>
      <Banner />
      <div className="globalContainer">
        <ProductsList
          $whichPage="home"
          products={restaurants as HomeProducts[]}
        />
      </div>
    </>
  );
};

export default Home;
