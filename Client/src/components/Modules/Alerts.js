// Utilities
import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import AlertContext from '../../context/alert/alertContext';
import Note from '../Utilities/Notes';

// Styled Comp



const AlertDiv = styled.div`
  width: 100%;
  color: ${props => props.theme.colors.danger};
  display: flex; 
  justify-content: space-between;
  align-items: center;
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
  width: 100%;
  padding: 1px;
  margin-bottom: 10px;
  background: ${props => props.theme.colors.danger};
  /* border: 1px solid ${props=>props.theme.colors.danger}; */
    
  );
  `

const Alerts = () => {
  const alertCont = useContext(AlertContext);
  console.log(alertCont.alerts[0]);
  console.log(alertCont.alerts[1]);

  return (
    alertCont.alerts[1] ?
    alertCont.alerts.map((alert, i) => ( 
      i > 0 && 
      <NoteWrap>
      <AlertDiv key={i}>
        <i className='fas fa-info-circle'></i>
        {alert.msg}
        <i className='fas fa-info-circle'></i>
      </AlertDiv> 
      </NoteWrap>
      
    )) : 
    null
  )
};

export default Alerts;
