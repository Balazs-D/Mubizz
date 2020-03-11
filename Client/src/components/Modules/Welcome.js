// Utilities
import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import Login from './Auth/Login';
import Register from './Auth/Register';
import UserContext from '../../context/user/userContext';
import AlertContext from '../../context/alert/alertContext';
import Alerts from '../Modules/Alerts';

// Styled Components

const WelcomeCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  margin-top: 0px;
  justify-content: center;
  background-size: cover;
  background-position-y: bottom;
  @media (min-width: 800px) {
    margin-top: -60px;
    position: relative;
    height: 30vh;
  }
`;

const Welcome = () => {
  const userCont = useContext(UserContext);
  const alertCont = useContext(AlertContext);

  return (
    <div>
      <WelcomeCont>
        <Alerts />
        {userCont.newSignin ? <Register /> : <Login />}
      </WelcomeCont>
    </div>
  );
};

export default Welcome;
