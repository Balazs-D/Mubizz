// Libraries
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    mainRed: '#EE5F63',
    mainLightBlue: '#7AC2C9',
    steelBlue: '#6D87B9',
    mainPurple: '#3B3A5E',
    mainBlue: '#1C377B',
    gradientPink: '#fa709a',
    gradientYellow: '#fee140',
    lightGrey: '#B3A878',
    darkGrey: '#403642',
    basicBlue: '#35495E',
    basicYellow: '#FFC700',
    basicGrey: '#E0E0E0',
    primaryDark: '#272B2B',
    primaryLight: '#C4C4C4',
    darkOne: '#787878',
    secondaryDecent: '#305E5E',
    secondaryBright: '#3EC43B',
    warning: '#B8A837',
    info: '#41B883',
    infoLight: '#7FC3A5',
    danger: '#B8412E',
    white: '#fff',
    vueBlue: '#2d3436'
  },
  fontFamily: [
    'sans-serif',
    'Jockey One',
    'Rocky Salt',
    'Baloo Da',
    'Baloo Bhaijaan',
    'Nunito'
  ],
  fontSizes: {
    xs: '0.5vw',
    xm: '0.7vw',
    small: '1vw',
    half: '1.3vw',
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
