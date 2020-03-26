// Utilities
import React from 'react';
import styled from 'styled-components';

// Component

// Styled Comp

const ContDiv = styled.div`
  width: 100%;
  height: 30vh;
  margin: 0;
  border: 2px solid ${props => props.theme.colors.mainPurple};
 
`;

const BoardCont = () => {
  return <ContDiv></ContDiv>;
};

export default BoardCont;
