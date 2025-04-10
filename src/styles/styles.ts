import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#FFFFFF',
  warmWhite: '#FFF8F2',
  warmPink: '#E66767',
  warmBeige: '#FFEBD9',
  salmonRed: '#EC7575',
  lightApricot: '#FDE4C1'
};

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
};

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  list-style: none;
}

body {
  background-color: ${colors.warmWhite};
  color: ${colors.warmPink};

  .globalContainer {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%;
    }
  }
}
`;

export const BackgroundImage = styled.div`
  display: block;
  padding-top: 64px;
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
`;
