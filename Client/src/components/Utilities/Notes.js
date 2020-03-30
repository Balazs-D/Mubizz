// Utilities
import React, { useContext, useState, Fragment } from 'react';
import styled from 'styled-components';


// Styled Comp


const Notes = styled.div`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.info};
  background: ${props => props.theme.colors.white};
  padding: 10px;
  text-align: justify;
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fontFamily[4]};
  position: relative;
`;

const NoteWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding: 1px;
  margin-top: 40px;
  background-image: linear-gradient(
    ${props => props.theme.colors.info},
    ${props => props.theme.colors.secondaryDecent}
  );
  box-shadow: 4px 4px 1px 0px ${props => props.theme.colors.info};
`;


const Note =({text})=>{
    return (
      <NoteWrap>
        <Notes>
          {text}
        </Notes>
      </NoteWrap>
    );
}; export default Note;

