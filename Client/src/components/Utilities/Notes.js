// Utilities
import React from 'react';
import styled from 'styled-components';


// Styled Comp


const Notes = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: square;
  width: 80%;
  margin-top: 50px;
`;

const NoteItem = styled.li`
  font-size: ${props=>props.theme.fontSizes.small};
  color: white;
  margin-bottom:30px;
`;



const NoteWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 1px;
    background: ${props => props.theme.colors.info};

  /* box-shadow: 4px 4px 1px 0px ${props => props.theme.colors.info}; */
`;


const Note =()=>{
    return (
      <NoteWrap>
        <Notes>
          <NoteItem>Your user name is displayed your account until you update the profile infos.</NoteItem>
          <NoteItem>Your e-mail is not public.</NoteItem>
          <NoteItem>Inof one</NoteItem>
          <NoteItem>Inof one</NoteItem>
        </Notes>
      </NoteWrap>
    );
}; export default Note;

