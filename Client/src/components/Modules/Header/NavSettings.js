// Utilities
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Button from '../../Utilities/Button';
import RollButton from '../../Utilities/RollButton';
import userContext from '../../../context/user/userContext';

// Styled Components

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 0;
`;

const StyledLink = {
  textDecoration: 'none'
};

const NavSettings = () => {
  return (
    <List>
      <li>
        <Link to='/dashboard/search' style={StyledLink}>
          <RollButton text='Browser'   />
        </Link>
      </li>
      <li>
        <Link to='/login' style={StyledLink}>
          <RollButton text='Login' />
        </Link>
      </li>
      <li>
        <Link to='/register' style={StyledLink}>
          <RollButton text='Register' />
        </Link>
      </li>
      <li>
        <Link to='/dashboard/journal' style={StyledLink}>
          <RollButton text='Profile' />
        </Link>
      </li>
    </List>
  );
};

export default NavSettings;
