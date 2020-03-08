// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const ButtonBasic = styled.button`
padding: 5px;
display: flex;
justify-content: space-between;
border-radius: 4px;
outline: none;
border: 1px solid ${props => props.theme.colors.mainBlue};
font-size: ${props => props.theme.fontSizes.small};
font-family: ${props => props.theme.fontFamily[0]}
`



 const Button = ()=> {
    return (
      <div>
        <ButtonBasic>
          <i class='fas fa-sliders-h'></i><span>Button</span>
        </ButtonBasic>
      </div>
    );
};
export default Button