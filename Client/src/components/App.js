// Libraries
import React from 'react';
import styled from 'styled-components';
import '../assets/css/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Header from './Pages/Header/Header';
import Theme from './Style/Theme';
import Welcome from './Pages/Welcome';

// Styled Components

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden ;
`;
// =========================================================== //



export default function App() {
  return (
    <Router>
      <Theme>
        <MainContainer>
          <Header />
          <Welcome />
        </MainContainer>
      </Theme>
    
    
    <Switch>
        <Route path='/login'></Route>
    </Switch>
    </Router>


  );
}
