// Utilities
import React, {useContext} from 'react';
import styled from 'styled-components';

// Comp

import UserCont from '../../context/user/userContext';


const IntroText = ({stepNr}) => {

    const userCont = useContext(UserCont);

    return (
        <Notes>
           {userCont.infoNotesArray[`${stepNr}`].map((item, i)=>{
               return (<ul>{item}</ul>)
           })}
        </Notes>
    )
};

export default IntroText;

const Notes = styled.div`
  width: 70%;
  margin: 30px 0px 10px 0px;
  height: 70px;
  color: ${(props) => props.theme.colors.basicBlue};
  /* background-image:radial-gradient(${(props) =>
    props.theme.colors.infoLight}, ${(props) => props.theme.colors.info} ); */
  border-radius: 3px;
  padding: 20px;
  text-align: justify;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fontFamily[4]};;
  font-weight: 100;
  position: relative;
  /* box-shadow: 0px 0px 2px ${(props) =>
    props.theme.colors.secondaryDecent}; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
   background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 3px ${(props) => props.theme.colors.primaryDark};

`;