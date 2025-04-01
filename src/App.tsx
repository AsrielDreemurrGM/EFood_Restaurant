import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from './styles/styles';

import AllRoutes from './routes';
import Footer from './components/Footer';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
