import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {

  const alertCont = useContext(AlertContext);
        console.log(alertCont.alerts[0]);

  return (
    alertCont.length > 0 &&
    alertCont.alerts.map(alert => (
      <div key={alert.id}>
        <i className='fas fa-info-circle'></i>
        {alertCont.alerts.msg[1].message}
      </div>
    ))
  );


};

export default Alerts;
