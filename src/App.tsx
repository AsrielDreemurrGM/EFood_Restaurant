import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from './styles/styles';

import AllRoutes from './routes';
import Footer from './components/Footer';

import { store } from './store';
import CartContainer from './Containers/CartContainer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AllRoutes />
        <Footer />
        <CartContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
