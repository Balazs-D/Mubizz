// Utilities
import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

// Styled Components

const InputField = styled.input`
  padding: 10px;
  font-size: ${props => props.theme.fontSizes.large};
  border-radius: 4px;
  width: 100%;
  outline: none;
  border: 1px solid ${props => props.theme.colors.mainPurple};
  margin: 0px;

  @media (min-width: 800px) {
    padding: 10px;
    font-size: ${props => props.theme.fontSizes.small};
    font-style: italic;
    border-radius: 4px;
    width: 20vw;
    outline: none;
    border: 1px solid ${props => props.theme.colors.mainBlue};
    margin: 0px;
  }

  &:focus {
    box-shadow: 0px 0px 0px 1px ${props => props.theme.colors.mainPurple};
    border: 1px solid ${props => props.theme.colors.mainPurple};
    background: ${props => props.theme.colors.white};
    font-weight: bold;
    font-style: normal;
  }
`;

const LabelInput = styled.label`
  color: black;
  display: flex;
  align-self: flex-end;
  padding: 0px;
  width: 97.5%;
  margin-bottom: 5px;
  font-family: ${props => props.theme.fontFamily[3]};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 100;

  
`;

const Input = ({ placeholder, className, onChange, value, name, label, required, type, minLength }) => {
  return (
    <Fragment>
      <LabelInput htmlFor={name} >
        {label} 
      </LabelInput>
      <InputField
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        className={className}
        required={required}
        type={type}
        minLength={minLength}
        autoFocus
      ></InputField>
    </Fragment>
  );
};

export default Input;
