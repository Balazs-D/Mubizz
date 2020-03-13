// Libraries
import React, {useContext} from 'react';
import styled from 'styled-components';
import '../assets/css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserState from '../context/user/UserState';
import AuthState from '../context/auth/AuthState';
import AlertState from '../context/alert/AlertState';

// Components
import Header from './Modules/Header/Header';
import Theme from './StyledComp/Theme';
import Login from './Modules/Auth/Login';
import Register from './Modules/Auth/Register';
import Settings from './Modules/Menü/Settings';
import Footer from '../components/Modules/Footer/Footer';
import Dashboard from '../components/Modules/Dashboard/Dashboard';
import FilterBar from './Modules/FilterBar';
import userContext from '../context/user/userContext';

// Styled Components

const MainContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
  background: lightblue;
  display: flex;
  justify-content: center;
`;
// =========================================================== //

export default function App() {

  const userCont = useContext(userContext);

  return (
    <AuthState>
      <UserState>
        <AlertState>
          <Theme>
            <Router>
              <Header />
              <FilterBar />

              <MainContainer>
                <Switch>
                  <Route exact path='/login' component={Login}>
                    <Login />
                  </Route>
                  <Route exact path='/register' component={Register}>
                    <Register />
                  </Route>
                  <Route path='/dashboard' component={Dashboard}>
                     {<Dashboard />}
                  </Route>
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
