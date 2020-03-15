// Utilities
import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import AlertContext from '../../context/alert/alertContext';

// Styled Comp

const AlertDiv = styled.div`
width: 100%;
min-height: 20px;
`

const Alerts = () => {
  const alertCont = useContext(AlertContext);
  console.log(alertCont.alerts[0]);
  console.log(alertCont.alerts[1]);

  return (
    alertCont.alerts[1] ?
    alertCont.alerts.map((alert, i) => ( 
      i > 0 && 
      <AlertDiv key={i}>
        <i className='fas fa-info-circle'></i>
        {alert.msg}
      </AlertDiv> 
      
    )) : 
    <AlertDiv />
  )
};

export default Alerts;
