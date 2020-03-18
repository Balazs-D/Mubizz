// Utilities
import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import bg1 from '../../../graphics/processed/bg2.jpg';
import bg2 from '../../../graphics/processed/bg3.jpg';
import bg3 from '../../../graphics/processed/bg4.jpg';
import bg4 from '../../../graphics/processed/bg01.jpg';

// Component
import Card from '../../Utilities/CardRadius';
import SearchView from './SearchView';
import JournalView from './JournalView';
import Settings from './Settings';
import OfferManagement from './OfferManagement';
import Marked from './Marked';
import UserNetwork from './UserNetwork';
import EditProfile from './EditProfile';
import Messages from './Messages';
import Dashboard from './Dashboard';


// Styled Comp

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
padding: 10px;
width: 70%;
margin-right: 5%;
position: relative;
z-index: 0;

/* border: 1px solid ${props => props.theme.colors.mainPurple}; */
`;

const MainSection = () => {
  return (
    <Main>
      <Switch>
        <Route path='/dashboard/search' component={SearchView} />

        <Route path='/dashboard/journal' component={JournalView} />

        <Route path='/dashboard/marked' component={Marked} />

        <Route path='/dashboard/network' component={UserNetwork} />

        <Route path='/dashboard/edit-profile' component={EditProfile} />

        <Route path='/dashboard/messages' component={Messages} />

        <Route path='/dashboard/settings' component={Settings} />

        <Route path='/dashboard/offer-management' component={OfferManagement} />
      </Switch>
    </Main>
  );
};

export default MainSection;
