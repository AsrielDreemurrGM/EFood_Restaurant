import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { HeaderContainer, NavList, NavItem } from './styles';

import background from '../../assets/images/background.png';
import logo from '../../assets/images/logo.png';

import { RootReducer } from '../../store';
import { open } from '../../store/reducers/cart';

const Header = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <HeaderContainer style={{ backgroundImage: `url(${background})` }}>
      <div className="globalContainer">
        <NavList>
          <NavItem>
            <Link to="/">Restaurantes</Link>
          </NavItem>
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
          <NavItem onClick={openCart}>
            <p>
              {products.length} produto(s) <span>no carrinho</span>
            </p>
          </NavItem>
        </NavList>
      </div>
    </HeaderContainer>
  );
};

export default Header;
