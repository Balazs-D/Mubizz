// Libraries
import React from 'react';
import styled from 'styled-components';
import '../assets/css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserState from '../context/user/UserState';
import AuthState from '../context/auth/AuthState';
import AlertState from '../context/alert/AlertState';

// Components
import Header from './Modules/Header/Header';
import Theme from './StyledComp/Theme';
import Welcome from './Modules/Welcome';
import Settings from './Modules/Menü/Settings';

// Styled Components

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;
// =========================================================== //

export default function App() {
  return (
    <AuthState>
      <UserState>
        <AlertState>
          <Router>
            <Theme>
              {/* <MainContainer> */}
              <Header />
              {/* <Welcome /> */}
              {/* </MainContainer> */}

              <Switch>
                <Route exact path='/welcome' component={Welcome}>
                  <Welcome />
                </Route>
                <Route exact path='/settings' component={Settings}>
                  <Settings />
                </Route>
              </Switch>
            </Theme>
          </Router>
        </AlertState>
      </UserState>
    </AuthState>
  );
}
