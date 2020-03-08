// Libraries
import React from 'react';
import { ThemeProvider } from 'styled-components';



const theme = {
  colors: {
    mainRed: '#EE5F63',
    mainLightBlue: '#D1E5E6',
    mainPurple: '#676FB3',
    mainBlue: '#1C377B'
  },
  fontFamily: ['sans-serif', 'Jockey One'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  },
  mediaQueries: {
    mobile: {
      tabletMin: '480px',
      desktopMin: '768px'
    }
  }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
