import styled from 'styled-components';

import { BackgroundImage, colors } from '../../styles/styles';

export const HeroImage = styled(BackgroundImage)`
  padding-top: 24px;
  height: 280px;
`;

export const Wrapper = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 156px;
`;

export const Culture = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`;

export const DishName = styled(Culture)`
  font-weight: 900;
`;
