import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 5px;
`;

const Icon = styled.p`
  font-size: ${props => props.theme.fontSizes.xm};
  color: ${props => props.theme.colors.info};

  
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  
  height: 10px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;  border: 1px solid black;

`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  height: 25px;
  background: ${props =>
    props.checked ? props.theme.colors.gradientYellow : props.theme.colors.white};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid ${props =>
    props.checked ? props.theme.colors.mainPurple : props.theme.colors.info};


  ${Icon} {
    /* visibility: ${props => (props.checked ? 'visible' : 'hidden')} */
    visibility: visible;
    color: ${props=> (props.checked ? props.theme.colors.mainPurple : props.theme.colors.info)}; 
  }
`;

const Checkbox = ({ className, checked, text, onChange, ...props }) => (
  <CheckboxContainer className={className} >
    <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
    <StyledCheckbox >
      <Icon>{text}</Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
