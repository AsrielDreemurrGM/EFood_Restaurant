import styled from 'styled-components';

import { BackgroundImage, colors } from '../../styles/styles';

export const HeaderContainer = styled(BackgroundImage)`
  height: 186px;

  a {
    color: ${colors.warmPink};
    margin-left: 80px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  cursor: pointer;

  font-size: 18px;
  font-weight: 900;
`;
