import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertCont = useContext(AlertContext);
  console.log(alertCont.alerts[0]);
  // console.log(alertCont.alerts[1].msg);

  return (
    alertCont.length !== null &&
    alertCont.alerts.map(alert => (
      <div key={alert.id}>
        <i className='fas fa-info-circle'></i>
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
