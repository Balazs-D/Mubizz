// Utilities
import React from 'react';
import styled, { css } from 'styled-components';

// Styled Components

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* font-size: 10px; */
  font-family: sans-serif;
  text-decoration: none;
  background: ${props => props.theme.colors.warning};
  border: 1px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.mainPurple};
  text-align: center;

  position: relative;
  transition: all 0.35s;
  z-index: 0;
  outline: none;

  &:hover {
    background: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.primaryDark};
  }
  &:active {
    background: ${props => props.theme.colors.info};
    color: ${props => props.theme.colors.primaryDark};
  }

`;

const SpanButton = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  color: ${props => props.theme.colors.mainPurple};
`;

const ButtonCircle = ({ className, text, onClick, type, component, value, icon }) => {
  return (
    <div>
      <Button
        className={className}
        component={component}
        onClick={onClick}
        type={type}
        value={value}
      >
        <SpanButton>{icon}</SpanButton>
      </Button>
    </div>
  );
};
export default ButtonCircle;
