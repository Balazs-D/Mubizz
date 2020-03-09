// Utilities
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Button from '../../Utilities/Button';

// Styled Components

const List = styled.ul`
display: flex;
justify-content: space-between;
margin: 0;
padding: 0;`;

const StyledLink = {
textDecoration: 'none',

};

const NavSettings =()=> {
    return (
      <List>
        <li>
          <Link to='/settings' style={StyledLink}>
            <Button iconClass='fas fa-sliders-h' text='Settings' />
          </Link>
        </li>
        <li>
          <Link style={StyledLink}>
            <Button iconClass='far fa-envelope' text='Messages' />
          </Link>
        </li>
        <li>
          <Link style={StyledLink}>
            <Button iconClass='fas fa-sign-out-alt' text='Logout' />
          </Link>
        </li>
        <li>
          <Link style={StyledLink}>
            <Button text='Profile' />
          </Link>
        </li>
      </List>
    );
};

export default NavSettings
