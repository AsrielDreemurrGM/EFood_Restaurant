import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

type Props = {
  $whichPage: 'home' | 'profile';
};

export const Container = styled.section<Props>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$whichPage === 'home' ? '1fr 1fr' : `1fr 1fr 1fr`};
  padding-top: 80px;
  padding-bottom: 120px;
  gap: ${(props) => (props.$whichPage === 'home' ? '80px' : `32px`)};
  row-gap: ${(props) => (props.$whichPage === 'home' ? '48px' : `32px`)};

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: ${(props) =>
      props.$whichPage === 'home' ? '1fr 1fr' : `1fr 1fr`};
    gap: ${(props) => (props.$whichPage === 'home' ? '40px' : `32px`)};
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
