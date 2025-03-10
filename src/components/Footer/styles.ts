import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const Container = styled.div`
  padding: 40px 0;
  display: block;
  background-color: ${colors.warmBeige};
  justify-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  padding-top: 32px;
  gap: 8px;
`;

export const Information = styled.p`
  max-width: 480px;
  width: 100%;
  padding-top: 80px;
  font-weight: 400;
  font-size: 10px;
  text-align: center;
`;
