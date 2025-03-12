import styled from 'styled-components';
import { BackgroundImage } from '../../styles/styles';

export const HeaderContainer = styled(BackgroundImage)`
  height: 186px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  cursor: pointer;
  p {
    font-size: 18;
    font-weight: 900;
  }
`;
