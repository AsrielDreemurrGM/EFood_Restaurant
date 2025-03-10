import { GlobalStyle } from './styles/styles';

import Banner from './components/Banner';
import Footer from './components/Footer';

import ProductsList from './Containers/ProductsList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <div className="globalContainer">
        <ProductsList />
      </div>
      <Footer />
    </>
  );
}

export default App;
