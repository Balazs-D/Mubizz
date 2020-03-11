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
align-items: center;

margin: 0;
padding: 0;`;

const ButtonNav = styled(Button)`
border: none;
background: transparent;`

const StyledLink = {
textDecoration: 'none'

};

const NavSettings =()=> {
    return (
      <List>
        <li>
          <Link to='/login' style={StyledLink}>
            <ButtonNav iconClass='fas fa-sliders-h' text='Login' />
          </Link>
        </li>
        <li>
          <Link to='/register' style={StyledLink}>
            <ButtonNav iconClass='far fa-envelope' text='Register' />
          </Link>
        </li>
       
      </List>
    );
};

export default NavSettings
