// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Comp
const IntroCont = styled.h3`
  display: flex;
  margin-top: 150px;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50%;
  text-align: justify;
  top: 50%;
  right: 50%;
  transform: translateX(50%);
  font-family: 'Noto Serif';
  font-size: ${props => props.theme.fontSizes.huge};
  color: ${props => props.theme.colors.mainBlue};
  @media (min-width: 800px) {
    margin-top: -50px;
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

const StyledSpan = styled.span`
    /* color: ${props => props.theme.colors.gradientPink};
    text-shadow: 0px 0px 10px black;
    letter-spacing: 5px; */
`;

const Intro = () => {
  return (
    <IntroCont>Find and offer your services in the music industry...</IntroCont>
  );
};

export default Intro;
