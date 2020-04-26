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
import ReferenceManagement from './ReferenceManagement';
import Intro from './Intro';
import Marked from './Marked';
import Filter from './FilterView';
import EditProfile from './EditProfile';
import Messages from './Messages';
import Dashboard from './Dashboard';
import IntroText from '../../Utilities/IntroText';
import YourProfile from '../../ProfileView/YourProfile';

// Styled Comp

const GradientCont = styled.div`
  display: flex;

  margin-right: -10vw;
  justify-content: center;
  align-items: flex-start;
  background: ${(props) => props.theme.colors.basicBlue};
  padding: 1px;
  height: 100%;
`;

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 0px;
width: 60vw;
margin-right: 0%;
position: relative;

z-index: 0;
background: ${(props) => props.theme.colors.white};

/* border: 1px solid ${(props) => props.theme.colors.mainPurple}; */
`;

const MainSection = () => {
  return (
    <GradientCont>
      <Main>
        <Switch>
          <Route path='/dashboard/search' component={SearchView} />
          <Route path='/dashboard/journal' component={JournalView} />
          <Route path='/dashboard/marked' component={Marked} />
          <Route path='/dashboard/filter' component={Filter} />
          <Route path='/dashboard/edit-profile' component={EditProfile} />
          <Route path='/dashboard/messages' component={Messages} />
          <Route path='/dashboard/settings' component={Settings} />
          <Route path='/dashboard/your-profile' component={YourProfile} />
          <Route
            path='/dashboard/offer-management'
            component={OfferManagement}
          />
          <Route
            path='/dashboard/reference-management'
            component={ReferenceManagement}
          />
          <Route path='/dashboard/intro' component={Intro} />
        </Switch>
      </Main>
    </GradientCont>
  );
};

export default MainSection;
