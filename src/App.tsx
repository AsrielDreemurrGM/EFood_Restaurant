import Banner from './components/Banner';
import { GlobalContainer, GlobalStyle } from './styles/styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalContainer>
        <Banner />
      </GlobalContainer>
    </>
  );
}

export default App;
