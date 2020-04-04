// Utilities
import React from 'react';
import styled from 'styled-components';

// Components

const Cont = styled.div`
  font-family: system-ui;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Button = styled.input.attrs({ type: 'button' })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  height: 25px;
  background: ${props =>
    props.checked
      ? props.theme.colors.gradientYellow
      : props.theme.colors.white};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid
    ${props =>
      props.checked ? props.theme.colors.mainPurple : props.theme.colors.info};
  color: ${props =>
    props.checked ? props.theme.colors.mainPurple : props.theme.colors.info};
  font-size: ${props => props.theme.fontSizes.xm};
  margin: 0px 5px 5px 0px;
  outline: none;
`;

const ButtonTag = ({ text, value, onClick, onChange, checked }) => {
  return (
    <Cont>
      <Button
        checked={checked}
        onClick={onClick}
        onChange={onChange}
        text={text}
        value={value}
      ></Button>
    </Cont>
  );
};

export default ButtonTag;
