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
    /* width: 10vw; */
    outline: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.info};
    margin: 0px;
    color: ${props => props.theme.colors.info};
    background: transparent;
  }

  &:focus {
    /* box-shadow: 0px 0px 0px 1px ${props => props.theme.colors.mainPurple}; */
    border-bottom: 1px solid ${props => props.theme.colors.warning};
    /* box-shadow: inset 0px 0px 100px 100px ${props => props.theme.colors.white}; */
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
  label,
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
