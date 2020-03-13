// Utilities
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Button from '../../Utilities/Button';
import RollButton from '../../Utilities/RollButton';

// Styled Components

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-right: 20px;
  padding: 0;
`;

const StyledLink = {
  textDecoration: 'none'
};

const NavSettings = () => {
  return (
    <List>
      <li>
        <Link to='/dashboard' style={StyledLink}>
          <RollButton text='Dashboard' />
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
    </List>
  );
};

export default NavSettings;
