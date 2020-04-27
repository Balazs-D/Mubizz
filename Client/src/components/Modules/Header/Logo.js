// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Content
import LogoVect from '../../../graphics/SVG/logoFinal.png';

// Styled Components

const Image = styled.img`
  width: 15vw;
  height: auto;
  margin-top: -2px;
  
`;

const LogoCont = styled.div`
  padding-top: -5px;
  /* background: ${(props) => props.theme.colors.mainLightBlue}; */
  padding: 4px;
  margin: 5px;
  @media (max-width: 800px) {
   
    display: none;
    
  }
`;

const LogoTextMobile = styled.h3`
  font-family: 'Baloo Bhaijaan';
  color: ${props => props.theme.colors.mainPurple};
  font-weight: 300;
  letter-spacing: 0.5px;
  margin: 0px;
  padding: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  display: flex;
  @media (min-width: 320px) {
    justify-content: flex-start;
    color: ${props => props.theme.colors.mainPurple};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes.huge};
  }
`;

const Logo = () => {
  return (
    <LogoCont>
      <Link to='/dashboard'>
        <LogoTextMobile>
          <Image src={LogoVect} alt='' />
        </LogoTextMobile>
      </Link>
    </LogoCont>
  );
};

export default Logo;
