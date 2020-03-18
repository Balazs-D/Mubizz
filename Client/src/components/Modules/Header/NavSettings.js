// Utilities
import React, { useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Button from '../../Utilities/Button';
import RollButton from '../../Utilities/RollButton';
import userContext from '../../../context/user/userContext';
import AuthContext from '../../../context/auth/authContext';

const NavSettings = () => {
  const authCont = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authCont;
  const onLogout = () => {authCont.logout();
  };

  const loggedNavbar = (
    <List>
      <li>
        <Link to='/dashboard/settings' style={StyledLink}>
          <RollButton text='Settings' />
        </Link>
      </li>
      <li>
        <Link to='/dashboard/messages' style={StyledLink}>
          <RollButton text='Messages' />
        </Link>
      </li>

      <li>
        <Link to='/dashboard/edit-profile' style={StyledLink}>
          <RollButton text='Profile' />
        </Link>
      </li>
      <Link>
        <Link to='/login' style={StyledLink}>
          <RollButton text='Logout' onClick={onLogout} />
        </Link>
      </Link>
    </List>
  );

  const guestNavbar = (
    <List loggedOut={true}>
      <li>
        <Link to='/login' style={StyledLink}>
          <RollButton text='Login' />
        </Link>
      </li>
      <Link>
        <Link to='/register' style={StyledLink}>
          <RollButton text='Register' />
        </Link>
      </Link>
    </List>
  );


  return isAuthenticated ? loggedNavbar : guestNavbar;
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

