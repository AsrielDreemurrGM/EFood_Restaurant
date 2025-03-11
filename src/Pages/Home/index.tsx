import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import ProductsList from '../../Containers/ProductsList';

const Home = () => (
  <>
    <Banner />
    <div className="globalContainer">
      <ProductsList />
    </div>
    <Footer />
  </>
);

export default Home;
