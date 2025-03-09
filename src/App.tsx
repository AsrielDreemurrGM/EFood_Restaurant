import { GlobalStyle } from './styles/styles';

import Banner from './components/Banner';
import Products from './components/Product';

function App() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <div className="globalContainer">
        <Products />
      </div>
    </>
  );
}

export default App;
