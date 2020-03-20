// Utilities
import React from 'react';
import styled from 'styled-components';

// Component

// Styled Comp

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
padding: 5px;
width: 100%;
margin-right: 5%;
position: relative;
z-index: 0;
border: 1px solid red;

/* border: 1px solid ${props => props.theme.colors.mainPurple}; */
`;

const BoardSection = () => {
  return <Main></Main>;
};

export default BoardSection;
