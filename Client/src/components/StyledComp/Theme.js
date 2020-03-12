// Libraries
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    mainRed: '#EE5F63',
    mainLightBlue: '#7AC2C9',
    steelBlue: '#6D87B9',
    mainPurple: '#6047A8',
    mainBlue: '#1C377B',
    gradientPink: '#fa709a',
    gradientYellow: '#fee140'
  },
  fontFamily: ['sans-serif', 'Jockey One', 'Rocky Salt', 'Baloo Da', 'Baloo Bhaijaan'],
  fontSizes: {
    xs: '0.5em',
    small: '1vw',
    medium: '2vw',
    large: '3vw',
    huge: '5vw'
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
