import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/styles';

import AllRoutes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
