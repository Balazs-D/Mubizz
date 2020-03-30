// Utilities
import React from 'react';
import styled from 'styled-components';



const DiagramStep= ({number, text})=> {
    return (
        <DivCont>
        <StepNr><Nr>{number}</Nr></StepNr>
        <TextField>{text}</TextField>
            
        </DivCont>
    )
};

export default DiagramStep;

// Styled Comp

const DivCont = styled.div`
width: 25%;
height: 150px;
border: 1px solid ${props=>props.theme.colors.mainPurple};
font-family: ${props=>props.theme.fontFamily[4]};
position: relative;
display: flex;
justify-content: center;
align-items: flex-start;
box-shadow: 0px 0px 3px ${props=>props.theme.colors.steelBlue};
background: ${props=>props.theme.colors.info};
`;

const StepNr = styled.div`
  border-left: 1px solid ${props => props.theme.colors.mainPurple};
    border-right: 1px solid ${props => props.theme.colors.mainPurple};  
    border-bottom: 1px solid ${props => props.theme.colors.mainPurple};


  border-bottom-left-radius: 4px; 
   border-bottom-right-radius: 4px;

  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; 
  top: 0px;
  left: 30px;
  transform: translateX(-50%);
  background: ${props=>props.theme.colors.basicYellow}
`;

const Nr = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.secondaryDecent};
`;

const TextField = styled.p`
  width: 100%;
  margin-top: 50px;
  padding: 10px;
  text-align: justify;
  font-size: ${props => props.theme.fontSizes.xm};
  color: ${props => props.theme.colors.white};
  background: ${props=>props.theme.colors.info}
`;
