import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const ProductWrapper = styled.div`
  background-color: ${colors.white};
  position: relative;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
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
  font-size: 18px;
  font-weight: 700;
`;

export const Rating = styled(Title)``;

export const Description = styled.p`
  padding: 16px 0;
  font-size: 14px;
  font-weight: 400;
`;

export const TitleWrapper = styled.div`
  display: flex;
  padding-top: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 8px;

  svg {
    width: 21px;
    height: 20px;
  }
`;
