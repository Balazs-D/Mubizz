// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const ButtonRoll = styled.button`
  display: block;

  width: 90px;
  height: 20px;
  /* line-height: 40px; */
  font-size: 10px;
  font-family: sans-serif;
  text-decoration: none;
  border-radius: 0vh;
  background:transparent;
  border: 1px solid ${props => props.theme.colors.secondaryBright};
  color: ${props => props.theme.colors.secondaryBright};
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

const RollButton = ({ className, text, onClick, type, component, value }) => {
  return (
    <div>
      <ButtonRoll
        className={className}
        component={component}
        onClick={onClick}
        type={type}
        value={value}
      >
        <SpanButton>{text}</SpanButton>
      </ButtonRoll>
    </div>
  );
};
export default RollButton;
