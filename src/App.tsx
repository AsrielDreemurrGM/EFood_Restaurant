import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/styles';

import Home from './Pages/Home';
import AllRoutes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AllRoutes />
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;
