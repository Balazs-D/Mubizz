// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const InputField = styled.input`
  padding: 5px;
  border-radius: 4px;
  width: 70%;
  outline: none;
  border: 1px solid ${props => props.theme.colors.mainBlue};
  margin: 5px;
  @media (min-width: 500px) {
    padding: 5px;
    border-radius: 4px;
    width: 20vw;
    outline: none;
    border: 1px solid ${props => props.theme.colors.mainBlue};
    margin: 5px;
  }

  &:focus {
    box-shadow: 0px 0px 6px ${props => props.theme.colors.mainBlue};
    border: 1px solid ${props => props.theme.colors.mainLightBlue};
  }
`;

const Input = ({placeholder}) => {
  return <InputField placeholder={placeholder}></InputField>;
};

export default Input;
