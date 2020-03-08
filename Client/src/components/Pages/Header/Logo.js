// Libraries
import React, { Fragment } from 'react';
import styled from 'styled-components';


// Content 
import LogoVect from '../../../graphics/Logo.svg'

// Styled Components 

const Image = styled.img`
width: 40vw;
height: auto;`;

const LogoCont = styled.div`
  padding-top: -5px;
  background: ${props => props.theme.colors.mainLightBlue};
    padding: 4px;
    margin: 5px;
  @media (min-width: 500px) {
    background: ${props => props.theme.colors.mainLightBlue};
  }
`;

const LogoTextMobile = styled.h3`
  font-family: ${props => props.theme.fontFamily[1]};
  color: ${props => props.theme.colors.mainPurple};
  font-weight: 300;
  letter-spacing: 0.5px;
  margin: 0px;
  padding: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  display: flex;
  @media (min-width: 500px) {
    justify-content: flex-start;
    color: ${props => props.theme.colors.mainPurple};
    margin-top: -5px;
    
    padding-bottom: 20px;
    padding-right: 28px;
    padding-left: 5px;
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

const Logo =()=> {
    return (
        <LogoCont>
        <LogoTextMobile>MUBIZZ</LogoTextMobile>
        {/* <Image src={LogoVect} alt='' /> */}
        </LogoCont>
    )
};

export default Logo
