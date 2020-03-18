// Libraries
import React, { useContext } from 'react';
import styled from 'styled-components';
import '../assets/css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserState from '../context/user/UserState';
import AuthState from '../context/auth/AuthState';
import AlertState from '../context/alert/AlertState';
import userContext from '../context/user/userContext';
import AuthContext from '../context/auth/authContext';
import PrivateRoute from '../components/routing/PrivateRoute';

// Components
import Header from './Modules/Header/Header';
import Theme from './StyledComp/Theme';
import Login from './Modules/Auth/Login';
import Register from './Modules/Auth/Register';
import Settings from './Modules/Menü/Settings';
import Footer from '../components/Modules/Footer/Footer';
import Dashboard from './Modules/MainView/Dashboard';

import setAuthToken from '../../src/utils/setAuthToken';

// Styled Components

const MainContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
  background: lightblue;
  display: flex;
  justify-content: center;
`;
// =========================================================== //

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  const userCont = useContext(userContext);
  const authCont = useContext(AuthContext);

  return (
    <AuthState>
      <UserState>
        <AlertState>
          <Theme>
            <Router>
              <Header />

              <MainContainer>
                <Switch>
                  <PrivateRoute
                    exact
                    path='/'
                    component={Dashboard}
                  ></PrivateRoute>

                  <Route exact path='/login' component={Login}></Route>

                  <Route exact path='/register' component={Register}></Route>
                </Switch>
              </MainContainer>
              <Footer />
            </Router>
          </Theme>
        </AlertState>
      </UserState>
    </AuthState>
  );
}
