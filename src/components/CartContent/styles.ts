import styled from 'styled-components';
import { colors } from '../../styles/styles';

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
