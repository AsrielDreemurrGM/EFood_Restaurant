import { HeaderContainer, NavList, NavItem } from './styles';

import background from '../../assets/images/background.png';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${background})` }}>
    <div className="globalContainer">
      <NavList>
        <NavItem>
          <p>Restaurantes</p>
        </NavItem>
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
        <NavItem>
          <p>0 produto(s) no carrinho</p>
        </NavItem>
      </NavList>
    </div>
  </HeaderContainer>
);

export default Header;
