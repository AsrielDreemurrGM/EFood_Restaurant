import styled from 'styled-components';

import { BackgroundImage, breakpoints, colors } from '../../styles/styles';

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

  @media (max-width: ${breakpoints.tablet}) {
    gap: 10px;
    a {
      margin: 0;
    }
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  text-align: center;

  font-size: 18px;
  font-weight: 900;

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`;
