// Utilities
import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

// Styled Components

const InputField = styled.input`
  padding: 10px;
  font-size: ${props => props.theme.fontSizes.large};
  width: 100%;
  outline: none;
  border-bottom: 1px solid ${props => props.theme.colors.mainPurple};
  margin: 0px;

  @media (min-width: 800px) {
    padding: 12px;
    font-size: ${props => props.theme.fontSizes.small};
    font-style: normal;
    outline: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.info};
    margin: 0px;
    color: ${props => props.theme.colors.info};
    background: transparent;
  }

  &:focus {
    border-bottom: 1px solid ${props => props.theme.colors.warning};
    font-weight: bold;
    font-style: normal;
    outline: none
  }
`;


const InputMinimal = ({
  placeholder,
  className,
  onChange,
  value,
  name,
  required,
  type,
  minLength
}) => {
  return (
    <Fragment>
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

export default InputMinimal;
