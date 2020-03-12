// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const ButtonRoll = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-size: 10px;
  font-family: sans-serif;
  text-decoration: none;
  background: transparent;
  border: none;
  color: red;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;
  margin: 0 2vh;
  z-index: 3;
`;

const SpanButton = styled.div`
  position: relative;
  z-index: 0;

  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: #00aaff;
    transition: all 0.35s;
  }

  &:hover {
    color: green;
  }

  &:hover:after {
    height: 100%;
  }
`;

const RollButton = ({ className, text, onClick, type, component }) => {
  return (
    <div>
      <ButtonRoll
        className={className}
        component={component}
        onClick={onClick}
        type={type}
      >
        
         <SpanButton>{text}</SpanButton>
        
      </ButtonRoll>
    </div>
  );
};
export default RollButton;
