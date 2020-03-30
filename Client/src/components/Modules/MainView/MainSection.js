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
import IntroText from '../../Utilities/IntroText';

// Styled Comp

const GradientCont = styled.div`
  display: flex;

  /* margin-top: 17.5vw; */
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${props => props.theme.colors.basicBlue},
    ${props => props.theme.colors.mainPurple}
  );
  padding: 1px;
`;

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 0px;
width: 55vw;
margin-right: 0%;
position: relative;

z-index: 0;
background: ${props => props.theme.colors.white};

/* border: 1px solid ${props => props.theme.colors.mainPurple}; */
`;

const ContDiv = styled.form`
  width: 100%;
  /* border: 1px solid ${props => props.theme.colors.info}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px;
`;

const SiteName = styled.h2`
  color: white;
  background: ${props => props.theme.colors.basicBlue};
  font-family: ${props => props.theme.fontFamily[5]};
  padding: 5px 10px;

  width: 100%;
`;

const MainSection = () => {
  return (
    <GradientCont>
      <Main>
        <SiteName>Edit Profile</SiteName>
        <IntroText text='Here we goooooo....!!!' />
        <Switch>
          <Route path='/dashboard/search' component={SearchView} />

          <Route path='/dashboard/journal' component={JournalView} />

          <Route path='/dashboard/marked' component={Marked} />

          <Route path='/dashboard/network' component={UserNetwork} />

          <Route path='/dashboard/edit-profile' component={EditProfile} />

          <Route path='/dashboard/messages' component={Messages} />

          <Route path='/dashboard/settings' component={Settings} />

          <Route
            path='/dashboard/offer-management'
            component={OfferManagement}
          />
        </Switch>
      </Main>
    </GradientCont>
  );
};

export default MainSection;
