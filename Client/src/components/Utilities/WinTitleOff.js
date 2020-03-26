// Utilities
import React, { useContext, useState, Fragment } from 'react';
import styled from 'styled-components';

// Styled Comp

const TitleContOff = styled.h2`
  padding: 5px 10px;
  background: ${props => props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.darkGrey};
  border: 1px solid ${props => props.theme.colors.mainPurple};
  border-radius: 4px;
  font-size: ${props => props.theme.fontSizes.small};
  position: absolute;
  top: -16px;
  left: 56px;
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily[4]};
  cursor: default;
  transition: all 0.35s;

  &:hover {
    background: ${props => props.theme.colors.steelBlue};
  }

  &:active {
  }
`;

const WinTitleOff = ({ text }) => {
  return <TitleContOff>{text}</TitleContOff>;
};

export default WinTitleOff;
