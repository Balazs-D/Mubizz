// Utilities
import React from 'react';
import styled, {  css } from 'styled-components';

// Styled Components

const Button = styled.button`
  display: block;

  width: 90px;
  height: 20px;
  /* line-height: 40px; */
  font-size: 10px;
  font-family: sans-serif;
  text-decoration: none;
  border-radius: 0vh;
  background: ${props=>props.theme.colors.info};
  border: 1px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.mainPurple};
  letter-spacing: 2px;
  text-align: center;

  position: relative;
  transition: all 0.35s;
  margin: 0vh;
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

  ${({ secondary }) =>
    secondary &&
    css`
      border-radius: 4px;
      display: flex;
      text-align: end;
      color: ${props => props.theme.colors.primaryDark};
      border: 1px solid ${props => props.theme.colors.secondaryDecent};
      background: transparent;

      &:hover {
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.darkOne};
      }
      &:active {
        color: ${props => props.theme.colors.primaryDark};
        background: ${props => props.theme.colors.secondaryBright};
      }
    `}
`;

const SpanButton = styled.div`
  font-family: sans-serif;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3px;
`;

const ButtonMain = ({ className, text, onClick, type, component, value }) => {

  return (
    <div>
      <Button
        className={className}
        component={component}
        onClick={onClick}
        type={type}
        value={value}
        
        
      >
        <SpanButton>{text}</SpanButton>
      </Button>
    </div>
  );
};
export default ButtonMain;
