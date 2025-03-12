import Banner from '../../components/Banner';
import ProductsList from '../../Containers/ProductsList';

const Home = () => (
  <>
    <Banner />
    <div className="globalContainer">
      <ProductsList />
    </div>
  </>
);

export default Home;
