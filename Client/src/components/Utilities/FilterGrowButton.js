// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const ButtonGrow = styled.button`
  display: block;
  width: 10vw;
  height: 28px;
  line-height: 40px;
  font-size: 10px;
  font-family: sans-serif;
  text-decoration: none;
      font-family: ${props => props.theme.fontFamily[4]};

  color: ${props => props.theme.colors.secondaryDecent};
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;
  margin: 0 2vh;
  background: transparent;
  outline: none;
  border: none;

  &:hover {
    color: ${props => props.theme.colors.secondaryBright};
  }
/* 
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: ${props => props.theme.colors.mainPurple};
    transition: all 0.35s;
  } */

  &:hover:after {
    height: 100%;
  }
`;

const SpanButton = styled.div`
  position: relative;
  z-index: 2;
  line-height: 10px;
  padding: 2px 1px;
`;

const FilterButton = ({ className, text, onClick, type, component, value }) => {
  return (
    <div>
      <ButtonGrow
        className={className}
        component={component}
        onClick={onClick}
        type={type}
        value={value}
      >
        <SpanButton>{text}</SpanButton>
      </ButtonGrow>
    </div>
  );
};
export default FilterButton;

// a

// }

// a:hover{
//   color: #fff;
// }

// a:hover:after{
//   height: 100%;
// }
