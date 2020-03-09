// Utilities 
import React from 'react';
import styled from 'styled-components';

// Styled Comp
const IntroCont = styled.h3`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
width: 80%;
text-align: justify;
top: 50%;
right: 50%;
transform: translateX(50%);
font-family: 'Noto Serif';
font-size: ${props => props.theme.fontSizes.medium}
`;

const StyledSpan = styled.span`
color: ${props => props.theme.colors.mainPurple};
`

const Intro = () => {
    return (
      <IntroCont>
        <h3>
          Find and offer your services in the <StyledSpan>music</StyledSpan> industry....
        </h3>
      </IntroCont>
    );
};

export default Intro
