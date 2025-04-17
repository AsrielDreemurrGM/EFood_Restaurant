import styled from 'styled-components';

import { breakpoints, colors } from '../../styles/styles';

import { ButtonStyle } from '../../components/Button/styles';

export const Container = styled.div`
  z-index: 1;
  display: none;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.is-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Sidebar = styled.aside`
  z-index: 1;
  overflow-y: scroll;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.warmPink};

  ${ButtonStyle} {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
  }
`;

export const EmptyCartText = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${colors.warmBeige};
  text-align: center;
`;
