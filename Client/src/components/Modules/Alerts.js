import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertCont = useContext(AlertContext);
  return (
    alertCont.length > 0 &&
    alertCont.alerts.map(alert => (
      <div key={alert.id}>
        <i className='fas fa-info-circle'></i>
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
