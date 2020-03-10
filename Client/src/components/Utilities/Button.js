// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const ButtonBasic = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${props => props.theme.colors.mainBlue};
  font-family: ${props => props.theme.fontFamily[0]};
  font-size: ${props => props.theme.fontSizes.large};
  @media (min-width: 500px) {
    font-size: ${props => props.theme.fontSizes.small};
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${props => props.theme.colors.gradientYellow};
      box-shadow: 0px 0px 20px ${props => props.theme.colors.gradientPink
      };
    }

    &:active {
      background-color: ${props => props.theme.colors.mainRed};
      box-shadow: 0px 0px 40px ${props => props.theme.colors.gradientPink};
    }
  }
`;
const Button = ({ className, iconClass, text, onClick }) => {
  return (
    <div>
      <ButtonBasic className={className} onClick={onClick} >
        <span>
          <span>{text}</span>
        </span>
      </ButtonBasic>
    </div>
  );
};
export default Button;
