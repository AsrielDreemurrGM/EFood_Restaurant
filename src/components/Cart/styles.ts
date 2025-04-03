import styled from 'styled-components';

import { colors } from '../../styles/styles';

import { ButtonStyle } from '../Button/styles';

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
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.warmPink};

  ${ButtonStyle} {
    max-width: 100%;
    width: 100%;
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Product = styled.li`
  position: relative;
  display: flex;
  padding: 8px;
  background-color: ${colors.warmBeige};

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 16px;
  }
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  color: ${colors.warmBeige};
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 8px;
  object-fit: cover;
`;

export const TrashcanIcon = styled.img`
  position: absolute;
  cursor: pointer;
  width: 16px;
  height: 16px;
  right: 8px;
  bottom: 8px;
`;

export const EmptyCartText = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${colors.warmBeige};
  text-align: center;
`;
