// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const ButtonBasic = styled.button`
  padding: 5px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  background: transparent;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${props => props.theme.colors.mainBlue};
  font-family: ${props => props.theme.fontFamily[0]};
  font-size: ${props => props.theme.fontSizes.xs};
  @media (min-width: 320px) {
    font-size: ${props => props.theme.fontSizes.small};
  }
`;
const Button = ({ className, iconClass, text }) => {
  return (
    <div>
      <ButtonBasic className={className}>
        <span>
          <i style={{ margin: '0px 4px' }} className={iconClass}></i>
          <span>{text}</span>
        </span>
      </ButtonBasic>
    </div>
  );
};
export default Button;
