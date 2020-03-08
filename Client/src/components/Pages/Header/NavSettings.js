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
padding: 0;`

const NavSettings =()=> {
    return (
        <List>
<li><Link><Button /></Link></li>
<li><Link><Button /></Link></li>
<li><Link><Button /></Link></li>
<li><Link><Button /></Link></li>            
        </List>
    )
};

export default NavSettings
