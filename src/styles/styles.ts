import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#FFFFFF',
  warmWhite: '#FFF8F2',
  warmPink: '#E66767',
  warmBeige: '#FFEBD9',
  salmonRed: '#EC7575',
  lightApricot: '#FDE4C1'
};

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
  text-decoration: none;
}

body {
  background-color: ${colors.warmWhite};
  color: ${colors.warmPink};

  .globalContainer {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
}
`;
