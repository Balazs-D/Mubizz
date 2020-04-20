// Utilities
import React, { useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Switch, Nav, Route, Link } from 'react-router-dom';

// Components
import ButtonMain from '../../Utilities/ButtonMain';
import AuthContext from '../../../context/auth/authContext';
import UserContext from '../../../context/user/userContext';

const NavSettings = () => {
  const authCont = useContext(AuthContext);
  const userCont = useContext(UserContext)
  const { isAuthenticated, logout, user } = authCont;
  const onLogout = () => {
    authCont.logout();
  };

  const loggedNavbar = (
    <List>
      <li>
        <Link>
          <ButtonMain
            onClick={userCont.toggleFilterBar}
            text='Filter'
            style={StyledLink}
            to=''
          />
        </Link>
      </li>
      <li>
        <Link to='/dashboard/messages' style={StyledLink}>
          <ButtonMain text='Messages' />
        </Link>
      </li>

      <li>
        <Link to='/dashboard/edit-profile' style={StyledLink}>
          <ButtonMain text='Profile' />
        </Link>
      </li>

      <Link to='/login' style={StyledLink}>
        <ButtonMain text='Logout' onClick={onLogout} />
      </Link>
    </List>
  );

  const guestNavbar = (
    <List loggedOut={true}>
      <li>
        <Link to='/login' style={StyledLink}>
          <ButtonMain text='Login' />
        </Link>
      </li>
      
        <Link to='/register' style={StyledLink}>
          <ButtonMain text='Register' />
        </Link>
      
    </List>
  );

  return isAuthenticated ? loggedNavbar : null;
};

export default NavSettings;

// Styled Components

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 0;

  ${({ loggedOut }) =>
    loggedOut &&
    `
    width: 50%;
  `}
`;

const StyledLink = {
  textDecoration: 'none'
};
