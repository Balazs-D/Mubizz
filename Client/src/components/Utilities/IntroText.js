// Utilities
import React from 'react';
import styled from 'styled-components';



const IntroText = ({text}) => {
    return (
        <Notes>
            <p>{text}</p>
        </Notes>
    )
};

export default IntroText;

const Notes = styled.div`
  width: 90%;
  margin: 30px 0px;
  height: 100%;
  color: ${props => props.theme.colors.secondaryDecent};
  background: ${props => props.theme.colors.white};
  border-radius: 4px;
  padding: 20px;
  text-align: justify;
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fontFamily[4]};
  position: relative;
  box-shadow: 0px 0px 0px ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.mainPurple};

`;