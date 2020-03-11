// Utilities
import React, { Fragment } from 'react';
import styled from 'styled-components';

// Styled Components

const InputField = styled.input`
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  outline: none;
  border: 1px solid ${props => props.theme.colors.mainBlue};
  margin: 0px;
  @media (min-width: 800px) {
    padding: 10px;
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

const Input = ({ placeholder, className }) => {
  return (
    <Fragment>
      <InputField placeholder={placeholder} className={className}></InputField>
    </Fragment>
  );
};

export default Input;
