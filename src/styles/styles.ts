import { createGlobalStyle } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  warmWhite: '#FFF8F2',
  warmPink: '#E66767'
};

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
}

body {
  background-color: ${colors.warmWhite};
  color: ${colors.warmPink};
}
`;
