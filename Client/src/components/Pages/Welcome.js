// Utilities
import React from 'react';
import styled from 'styled-components';
import Bg1 from '/home/dci/DCI/lord-of-the-script/react/mubizz/Client/src/graphics/processed/bg01.jpg';

// Components
import Login from './Login/Login';


// Styled Components

const WelcomeCont = styled.div`
width: 100vw;
height: 85vh;
display: flex;
align-items: center;
justify-content: center;
/* background-image: url(${Bg1}); */
background-size: cover;
background-position-y: bottom;
/* overflow-x: scroll; */
`

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
