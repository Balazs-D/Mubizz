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
  padding: 5px;

  width: 90%;
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
`;

const H4 = styled.h4`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const EditSoloLine = ({ value, title, onClick }) => {
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);
  const { user } = authCont;

  return (
    <Li>
      <H4>{title}</H4>

      <InputEdit value={value} />

      {/* <ButtonLight onClick={onClick} text='Edit'></ButtonLight> */}
    </Li>
  );
};

export default EditSoloLine;
