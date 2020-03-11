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

const Input = ({ placeholder, className, onChange, value }) => {
  return (
    <Fragment>
      <InputField placeholder={placeholder} onChange={onChange} value={value} className={className}></InputField>
    </Fragment>
  );
};

export default Input;
