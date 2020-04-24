// Utilities
import React, {useContext} from 'react';
import styled from 'styled-components';


// Comp

import UserCont from '../../context/user/userContext';

// Styled Comp


const Notes = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: square;
  width: 80%;
  margin-top: 10px;
  justify-content: flex-start;
`;

const NoteItem = styled.li`
  font-size: ${props=>props.theme.fontSizes.small};
  color: white;
  margin-bottom: 5px;
`;



const NoteWrap = styled.div`
  display: flex;
  justify-content: center;
  
  align-content: center;
  width: 100%;
  height: 70%;
  padding: 1px;
    background: ${props => props.theme.colors.info};

  /* box-shadow: 4px 4px 1px 0px ${props => props.theme.colors.info}; */
`;


const Note =({stepNr})=>{

  const userCont = useContext(UserCont);

    return (
      <NoteWrap>
        <Notes>{userCont.infoNotesArray && userCont.infoNotesArray[`${stepNr}`].map((item, i)=>{
          return (<NoteItem key={i} >{item}</NoteItem>)
        })}</Notes>
      </NoteWrap>
    );
}; export default Note;

