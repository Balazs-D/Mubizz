// Libraries
import React, { useContext } from 'react';
import styled from 'styled-components';
import '../assets/css/style.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import UserState from '../context/user/UserState';
import AuthState from '../context/auth/AuthState';
import AlertState from '../context/alert/AlertState';
import userContext from '../context/user/userContext';
import AuthContext from '../context/auth/authContext';
import PrivateRoute from '../components/routing/PrivateRoute';
import LogoVect from '../graphics/SVG/logoFinal.png';

// Components
import Header from './Modules/Header/Header';
import Theme from './StyledComp/Theme';
import Login from './Modules/Auth/Login';
import Register from './Modules/Auth/Register';
import Settings from './Modules/Menü/Settings';
import Footer from '../components/Modules/Footer/Footer';
import Dashboard from './Modules/MainView/Dashboard';
import SearchView from './Modules/MainView/SearchView';
import JournalView from './Modules/MainView/JournalView';
import OfferManagement from './Modules/MainView/OfferManagement';
import Marked from './Modules/MainView/Marked';
import UserNetwork from './Modules/MainView/UserNetwork';
import EditProfile from './Modules/MainView/EditProfile';
import Messages from './Modules/MainView/Messages';

import setAuthToken from '../../src/utils/setAuthToken';

// Styled Components

const MainContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.info},
    ${(props) => props.theme.colors.infoLight}
  );
  @media (max-width: 800px) {
    display: hidden;
    height: 100%;
  }
`;

const MobileAlert = styled.div`
  @media (max-width: 800px) {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.basicBlue};
    z-index: 1005;
    display: flex;
    flex-direction: column;
    font-family: ${(props) => props.theme.fontFamily[5]};
    color: ${(props) => props.theme.colors.info};
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

const Pa = styled.p`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  width: 49%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: justify;
`;

const Img = styled.img`
  width: 50%;
  margin-top: -50%;
`;

// =========================================================== //

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

console.log('API URL: ' + process.env.REACT_APP_API_URL);

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
                <MobileAlert>
                  <Img src={LogoVect} alt='' />
                  <Pa>Is only operating on desktop version actually.</Pa>
                </MobileAlert>
                <Switch>
                  <PrivateRoute
                    exact
                    path='/'
                    component={Dashboard}
                  ></PrivateRoute>
                  <PrivateRoute
                    path='/dashboard'
                    component={Dashboard}
                  ></PrivateRoute>

                  <Route path='/login' component={Login}></Route>

                  <Route path='/register' component={Register}></Route>
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
