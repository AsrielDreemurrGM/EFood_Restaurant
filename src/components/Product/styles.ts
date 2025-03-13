import styled from 'styled-components';
import { colors } from '../../styles/styles';

type Props = {
  whichPage: 'home' | 'profile';
};

export const ProductWrapper = styled.div<Props>`
  position: relative;

  padding: ${(props) => (props.whichPage === 'home' ? '0' : '8px')};

  color: ${(props) =>
    props.whichPage === 'home' ? colors.warmPink : colors.warmBeige};

  background-color: ${(props) =>
    props.whichPage === 'home' ? colors.white : colors.warmPink};

  width: ${(props) => (props.whichPage === 'home' ? '472px' : '320px')};
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
  width: 100%;
  height: auto;
`;

export const Content = styled.div<Props>`
  padding: ${(props) => (props.whichPage === 'home' ? `8px` : '0')};

  border-style: ${(props) => (props.whichPage === 'home' ? 'solid' : 'none')};

  border-width: 0px 1px 1px 1px;
  border-color: ${colors.warmPink};
`;

export const Title = styled.p<Props>`
  padding-top: ${(props) => (props.whichPage === 'home' ? `0` : '8px')};
  font-size: ${(props) => (props.whichPage === 'home' ? `18px` : '16px')};
  font-weight: ${(props) => (props.whichPage === 'home' ? `700` : '900')};
`;

export const Rating = styled(Title)``;

export const Description = styled.p<Props>`
  padding: ${(props) => (props.whichPage === 'home' ? `16px 0` : '8px 0')};
  font-size: 14px;
  font-weight: 400;
`;

export const TitleWrapper = styled.div`
  display: flex;
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
