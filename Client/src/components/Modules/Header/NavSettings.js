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
padding: 0;`;

const ButtonNav = styled(Button)`
border: none;
background: red;
height: 10%`;



const StyledLink = {
textDecoration: 'none'

};


const NavSettings =()=> {
    return (
      <List>
        
          <li>
            <Link to='/login' style={StyledLink}>
              <RollButton text='Login'></RollButton>
            </Link>
          </li>
          <li>
            <Link to='/register' style={StyledLink}>
              <Button text='Register' />
            </Link>
          </li>
      
      </List>
    );
};

export default NavSettings
