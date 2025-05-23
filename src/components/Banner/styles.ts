import styled from 'styled-components';

import { BackgroundImage, breakpoints } from '../../styles/styles';

export const BannerBackground = styled(BackgroundImage)`
  div {
    justify-items: center;
  }
`;

export const Title = styled.h2`
  margin-top: 138px;
  max-width: 539px;
  font-size: 36px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    max-width: 200px;
    margin-top: 100px;
  }
`;
