// Utilities
import React from 'react';
import styled from 'styled-components';

const FooterCont = styled.div`
  width: 100%;
  padding: 20px 10px;
  background: ${props => props.theme.colors.steelBlue};
`;

const Footer = () => {
  return (
    <FooterCont>
      <h2>FOOTER</h2>
    </FooterCont>
  );
};

export default Footer;
