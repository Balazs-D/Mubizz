// Utilities
import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Component

import InputMinimal from '../InputMinimal';
import BoardCont from '../BoardCont';
import ButtonLight from '../ButtonLight';
import ButtonCheck from '../../Utilities//ButtonCheck';


// Styled Comp

// Styled Comp

const InputEdit = styled.input`
  padding: 1px;
  font-size: ${props => props.theme.fontSizes.small};
  font-style: italic;
  /* width: 10vw; */
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.info};
  margin: 0px;
  color: ${props => props.theme.colors.info};

  width: 90%;
  &:focus {
    background: ${props => props.theme.colors.white};
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

const TagCont = styled.div`
display: flex; 
flex-direction: row;
flex-wrap: wrap;
width: 95%;
 `;



const EditTagItem = ({ value, title, onClick }) => {
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);
  const { user } = authCont;

  return (
    <Li>
      <H4>{title}</H4>
      <TagCont>
        <label>
          <ButtonCheck text='Sound Technician' />
        </label>
        <label>
          <ButtonCheck text='Sound Engineer' />
        </label>
        <label>
          <ButtonCheck text='Singer' />
        </label>
        <label>
          <ButtonCheck text='Performance' />
        </label>
        <label>
          <ButtonCheck text='Musician' />
        </label>
        <label>
          <ButtonCheck text='Studio' />
        </label>
        <label>
          <ButtonCheck text='Live' />
        </label>
        <label>
          <ButtonCheck text='Broadcasting' />
        </label>
        <label>
          <ButtonCheck text='Promotion' />
        </label>
        <label>
          <ButtonCheck text='Organisation' />
        </label>
        <label>
          <ButtonCheck text='Management' />
        </label>
        <label>
          <ButtonCheck text='Volunteer' />
        </label>
      </TagCont>
    </Li>
  );
};

export default EditTagItem;
