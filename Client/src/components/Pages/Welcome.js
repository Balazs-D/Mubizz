// Utilities
import React from 'react';
import styled from 'styled-components';
import Bg1 from '/home/dci/DCI/lord-of-the-script/react/mubizz/Client/src/graphics/processed/bg01.jpg';

// Components
import Login from './Login/Login';

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
  return (
    <div>
      <WelcomeCont>
        <Login />
      </WelcomeCont>
    </div>
  );
};

export default Welcome;
