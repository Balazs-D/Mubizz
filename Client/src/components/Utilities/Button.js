// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const ButtonBasic = styled.button`
padding: 5px;
border-radius: 4px;
outline: none;
border: 1px solid ${props => props.theme.colors.mainBlue}
`



 const Button = ()=> {
    return (
        <div>
            <ButtonBasic>Go</ButtonBasic>
        </div>
    )
};
export default Button