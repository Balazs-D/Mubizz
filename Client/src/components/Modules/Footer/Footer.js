// Utilities
import React from 'react';
import styled from 'styled-components';

const FooterCont = styled.div`
  width: 100%;
  padding: 40px 40px;
  background: ${props => props.theme.colors.steelBlue};
  display: flex; 
  justify-content: flex-start;
`;

const Ul = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: flex-start;
width: 50%

`

const Block = styled.li`
  list-style: none;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${props=>props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.vueBlue};
  line-height: 20px;
  width: 250px;
`;

const H4 = styled.h4`
  /* border-bottom: 1px solid ${(props) => props.theme.colors.vueBlue}; */
  margin-bottom: 6px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterCont>
      <Ul>
        <Block>
          <H4>MUBIZZ.COM</H4>
          <p>Online platform to exchange services in the music industry.</p>
          <p>Berlin, 2020</p>
        </Block>
        <Block>
          <H4>CREDITS</H4>
          <p>Balazs Danyadi</p>
          <p>Mojgan Vafa</p>
          <p>Naima Adan Ahmed</p>
        </Block>
        <Block>
          <H4>SUPPORT</H4>
          <p>Robert Ristock</p>
          <p>Joseph Urbina</p>
        </Block>
      </Ul>
    </FooterCont>
  );
};

export default Footer;
