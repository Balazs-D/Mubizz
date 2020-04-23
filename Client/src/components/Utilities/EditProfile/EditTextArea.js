// Utilities
import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';

// Components

// Styled Comp

const InputEdit = styled.textarea`
  padding: 1px;
  font-size: ${props => props.theme.fontSizes.small};
  font-style: normal;
  /* width: 10vw; */
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.info};
  margin: 0px;
  color: ${props => props.theme.colors.info};
  background: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily[5]};
  padding: 30px 15px 15px 15px;

  width: 95%;
  &:focus {
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.warning};
    outline: none;
    font-style: bold;
  }
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 20px;
  position: relative;
`;

const H4 = styled.h4`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 10px 0px;
  position: absolute;
  left: 4%;
  top: -23%;
  border: 1px solid ${(props) => props.theme.colors.info};
  background: white;
  padding: 1px 4px;
  border-radius: 3px;
`;

const EditTextArea = ({
  value,
  name,
  onChange,
  onSubmit,
  spellCheck,
  placeholder,
  label,
  maxLength,
}) => {
  return (
    <Li>
      <Label>{label}</Label>

      <InputEdit
        value={value}
        name={name}
        onChange={onChange}
        onSubmit={onSubmit}
        spellCheck={spellCheck}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </Li>
  );
};

export default EditTextArea;
