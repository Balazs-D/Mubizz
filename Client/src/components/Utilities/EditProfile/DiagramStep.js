// Utilities
import React from 'react';
import styled from 'styled-components';

// Comp

import Note from '../Notes';



const DiagramStep= ({ text, title, nr})=> {
console.log(nr + 'HERE')
  return (

      <DivCont>
        <Row>
          <Word>{title}</Word>
        </Row>
        <TextField>{text}</TextField>
        <Note stepNr={nr}/>
      </DivCont>
    );
};

export default DiagramStep;

// Styled Comp

const DivCont = styled.div`
width: 35%;
border-left: 1px solid ${props=>props.theme.colors.mainPurple};
border-top: 1px solid ${props=>props.theme.colors.mainPurple};


border-bottom: 1px solid ${props=>props.theme.colors.mainPurple};

font-family: ${props=>props.theme.fontFamily[4]};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
background: ${props=>props.theme.colors.info};
`;



const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
padding: 1px 10px;
background: ${props=>props.theme.colors.basicYellow};
border-bottom: 1px solid ${props => props.theme.colors.mainPurple};


 

 
`



const Word = styled.p`
font-size: ${props=>props.theme.fontSizes.small};
  color: ${props => props.theme.colors.secondaryDecent};

`;

const TextField = styled.p`
  width: 100%;
  padding: 10px;
  text-align: justify;
  font-size: ${props => props.theme.fontSizes.xm};
  color: ${props => props.theme.colors.white};
  background: ${props=>props.theme.colors.info}
`;

