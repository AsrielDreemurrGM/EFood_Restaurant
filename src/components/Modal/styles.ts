import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/styles';

export const ModalContainer = styled.div`
  display: none;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  align-items: center;

  &.active {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ModalContent = styled.div`
  display: flex !important;
  z-index: 1;
  position: relative;
  width: 100%;
  max-height: 344px;
  padding: 32px;
  background-color: ${colors.warmPink};
  color: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  display: block;

  a {
    width: 100%;
  }
`;

export const ProductImage = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
  margin-right: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 130px;
    width: 100%;
  }
`;

export const Title = styled.p`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const Servings = styled(Description)`
  margin-top: 30px;
  margin-bottom: 16px;
`;
