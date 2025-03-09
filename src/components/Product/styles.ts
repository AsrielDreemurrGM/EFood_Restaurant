import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 80px;
  padding-bottom: 120px;
  gap: 80px;
  row-gap: 48px;
`;

export const Product = styled.div`
  background-color: ${colors.white};
`;

export const Image = styled.img`
  display: block;
  width: 472px;
  height: 217px;
`;

export const Content = styled.div`
  padding: 0 8px 8px 8px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${colors.warmPink};
`;

export const Title = styled.p`
  padding-top: 8px;
  font-size: 18px;
  font-weight: 700;
`;

export const Description = styled.p`
  padding-top: 16px;
  font-size: 14px;
  font-weight: 400;
`;
