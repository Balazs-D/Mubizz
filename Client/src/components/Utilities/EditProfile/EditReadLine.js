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

const Display = styled.p`
  color: ${props=>props.theme.colors.mainPurple};
  
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 90%;
  margin: 20px;
  border-bottom: 1px solid ${props=>props.theme.colors.mainPurple}
`;

const H4 = styled.h4`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const EditReadLine = ({ value, title, onClick }) => {
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);
  const { user } = authCont;

  return (
    <Li>
      <H4>{title}</H4>

      <Display>{value}</Display>

      {/* <ButtonLight onClick={onClick} text='Edit'></ButtonLight> */}
    </Li>
  );
};

export default EditReadLine;
