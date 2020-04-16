// Utilities
import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Component

import InputMinimal from '../InputMinimal';
import BoardCont from '../BoardCont';
import ButtonLight from '../ButtonLight';

// Styled Comp

const InputEdit = styled(InputMinimal)`
  padding: 1px;
  
 
  width: 90%;
  &:focus {
    background: ${props => props.theme.colors.white};
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 10px 0px;
  position: absolute;
  left: 4%;
  top: -28%;
  border: 1px solid ${(props) => props.theme.colors.info};
  background: white;
  padding: 1px 4px;
  border-radius: 3px;
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 95%;
  margin: 20px;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  padding: 10px;
  position: relative;
`;

const H4 = styled.h4`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const EditSoloLine = ({ value, title, onChange, name, label }) => {
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);
  const { user } = authCont;

  return (
    <Li>
      <Label>{label}</Label>

      <H4>{title}</H4>

      <InputEdit value={value} name={name} onChange={onChange} />
    </Li>
  );
};

export default EditSoloLine;
