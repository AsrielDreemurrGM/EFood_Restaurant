import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/styles';

import AllRoutes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
