import { GlobalStyle } from './styles/styles';

import Banner from './components/Banner';
import Products from './components/Product';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <div className="globalContainer">
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;
