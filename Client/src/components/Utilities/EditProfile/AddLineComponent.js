// Utilities
import React, { useState } from 'react';
import styled from 'styled-components';

// Components

import InputMinimal from '../InputMinimal';

// Styled Comp

const InputEdit = styled(InputMinimal)`
  padding: 1px;
  text-transform: italic;
  font-weight: lighter;
  width: 80%;
  &:focus {
    background: ${props => props.theme.colors.white};
    text-transform: normal;
    font-weight: bold;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};

const AddLineComponent = ({ onSubmit, placeholder, value }) => {
     
  const text = useInputValue('');
  console.log(text.value);
  return (
    <Form
      onSubmit={onSubmit}
    >
      <InputEdit
        name='skills'
        placeholder={placeholder}
        value={value}
        {...text}
      ></InputEdit>
    </Form>
  );
};

export default AddLineComponent;
