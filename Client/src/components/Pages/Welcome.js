// Utilities
import React, {useContext} from 'react';
import styled from 'styled-components';

// Components
import Login from './Login/Login';
import Register from './Login/Register';
import UserContext from '../../context/user/userContext';

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
  @media (min-width: 500px) {
    margin-top: -60px;
    position: relative;
    height: 30vh;
  }
`;

const Welcome = () => {

  const userCont = useContext(UserContext);

  return (
    <div>
      <WelcomeCont>
        {userCont.newSignin ? 
        <Register /> 
        : <Login />}
      </WelcomeCont>
    </div>
  );
};

export default Welcome;
