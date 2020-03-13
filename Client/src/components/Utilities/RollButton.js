// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const ButtonRoll = styled.button`
  display: block;

  width: 90px;
  height: 40px;
  line-height: 40px;
  font-size: 10px;
  font-family: sans-serif;
  text-decoration: none;
  border-radius: 25px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.mainPurple};
  color: ${props => props.theme.colors.mainBlue};
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;
  margin: 0vh;
  z-index: 0;
  outline: none;

  &:hover {
    background: ${props => props.theme.colors.gradientPink};
  }
`;

const SpanButton = styled.div`
  font-family: sans-serif;
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
