// Utilities
import React, { Fragment } from 'react';
import styled from 'styled-components';

// Styled Components

const InputField = styled.input`
  padding: 20px;
  font-size: ${props => props.theme.fontSizes.large};
  border-radius: 4px;
  width: 100%;
  outline: none;
  border: 1px solid ${props => props.theme.colors.mainBlue};
  margin: 0px;
  @media (min-width: 800px) {
    padding: 10px;
    font-size: ${props => props.theme.fontSizes.small};

    border-radius: 4px;
    width: 20vw;
    outline: none;
    border: 1px solid ${props => props.theme.colors.mainBlue};
    margin: 0px;
  }

  &:focus {
    box-shadow: 0px 0px 6px ${props => props.theme.colors.mainBlue};
    border: 1px solid ${props => props.theme.colors.mainLightBlue};
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

const Input = ({ placeholder, className, onChange, value, name, label }) => {
  return (
    <Fragment>
      <LabelInput htmlFor={name}>{label}</LabelInput>
      <InputField
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        className={className}
      ></InputField>
    </Fragment>
  );
};

export default Input;
