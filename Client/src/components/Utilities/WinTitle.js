// Utilities
import React, { useContext, useState, Fragment } from 'react';
import styled from 'styled-components';


// Styled Comp


const TitleCont = styled.h2`
  padding: 5px 10px;
  background: ${props => props.theme.colors.gradientPink};
  border: 1px solid ${props => props.theme.colors.mainPurple};
  border-radius: 4px;
  font-size: ${props => props.theme.fontSizes.medium};
  position: absolute;
  top: -26px;
  right: 56px;
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily[4]};
`;


const WinTitle = ({text}) => {
    return (
        <TitleCont>{text}</TitleCont>
    )
};

export default WinTitle