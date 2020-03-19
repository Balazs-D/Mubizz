// Utilities
import React from 'react';
import styled from 'styled-components';

// Component

// Styled Comp

const ContDiv = styled.div`
  width: 100%;
  height: 30vh;
  border-bottom: 1px solid ${props => props.theme.colors.mainPurple};
  border-right: 1px solid ${props => props.theme.colors.mainPurple};
  border-left: 1px solid ${props => props.theme.colors.mainPurple};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const DasboardCont = ({text}) => {
  return <ContDiv>{text}</ContDiv>;
};

export default DasboardCont;
