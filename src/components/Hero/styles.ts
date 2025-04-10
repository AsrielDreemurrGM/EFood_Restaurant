import styled from 'styled-components';

import { BackgroundImage, breakpoints, colors } from '../../styles/styles';

export const HeroImage = styled(BackgroundImage)`
  position: relative;
  padding-top: 24px;
  height: 280px;
  background-size: cover;
  background-color: ${colors.warmBeige};

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    content: '';
  }

  .globalContainer {
    position: relative;
    z-index: 1;
  }
`;

export const Wrapper = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 156px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 126px;
  }
`;

export const Culture = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`;

export const DishName = styled(Culture)`
  font-weight: 900;
`;
