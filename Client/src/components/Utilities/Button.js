// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const ButtonBasic = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  outline: none;
  border: none;
  font-family: ${props => props.theme.fontFamily[3]};
  font-size: ${props => props.theme.fontSizes.large};
  @media (min-width: 800px) {
    font-size: ${props => props.theme.fontSizes.small};
    transition: all 0.3s ease-in-out;
    height: 100%;

    &:hover {
      height: 10%;
    }

    &:active {
      background-color: ${props => props.theme.colors.mainRed};
      box-shadow: 0px 0px 40px ${props => props.theme.colors.gradientPink};
    }


  }
`;
const Button = ({ className, text, onClick, type, component }) => {
  return (
    <div>
      <ButtonBasic
        className={className}
        component={component}
        onClick={onClick}
        type={type}
      >
        <span>
          <span>{text}</span>
        </span>
      </ButtonBasic>
    </div>
  );
};
export default Button;
