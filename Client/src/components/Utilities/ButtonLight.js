// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const Button = styled.button`
  display: block;

  width: 50px;
  height: 20px;
  /* line-height: 40px; */
  font-size: 10px;
  font-family: sans-serif;
  text-decoration: none;
  border-radius: 4px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.mainPurple};
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
`;

const SpanButton = styled.div`
  font-family: sans-serif;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3px;
`;

const ButtonLight = ({ className, text, onClick, type, component, value }) => {
  return (
    <div>
      <Button
        className={className}
        component={component}
        onClick={onClick}
        type={type}
        value={value}
      >{text}
        {/* <SpanButton>{text}</SpanButton> */}
      </Button>
    </div>
  );
};
export default ButtonLight;
