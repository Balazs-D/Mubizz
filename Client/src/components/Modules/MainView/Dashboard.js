// Utilities
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import AuthContext from '../../../context/auth/authContext';

// Components
import MainSection from './MainSection';
import DashboardSettings from '../Sidebars/DashboardSettings';

// Components

// Styled Components
const DashCont = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-around;
  margin-left: -15%;
  padding: 30px 0px;
  background: transparent;
  /* border-top: 2px solid ${(props) => props.theme.colors.secondaryDecent}; */
`;

const Dashboard = ({ match }) => {
  const authCont = useContext(AuthContext);

  console.log(authCont.social);
  console.log(authCont);

  // useEffect(() => {
  //   console.log('set useEffect dashboard');

  //   if (
  //     authCont.profile &&
  //     authCont.creator === true &&
  //     authCont.profile.location.length > 0 &&
  //     authCont.profile.description.length > 0 &&
  //     authCont.profile.skills.length > 0 &&
  //     authCont.profile.languages.length > 0 &&
  //     authCont.profile.offer
  //   ) {
  //     authCont.setPro();
  //   }
  //   if (
  //     authCont.profile &&
  //     authCont.member === true &&
  //     authCont.profile.reference
  //   ) {
  //     authCont.setCreator();
  //   }
  //   if (
  //     authCont.profile.profileName &&
  //     authCont.profile.profileMotto &&
  //     authCont.profile.profileName.length > 0 &&
  //     authCont.profile.profileMotto.length > 0 &&
  //     authCont.profile.avatar &&
  //     authCont.profile.services.length > 0
  //   ) {
  //     authCont.setMember();
  //     console.log('set member');
  //   }
  // }, [authCont]);

  useEffect(() => {
    authCont.loadUser();
    console.log('dashboard use effect');

    if (authCont.creator && authCont.offer) {
      authCont.setPro();
    } else if (authCont.member && authCont.reference) {
      authCont.setCreator();
    } else if (
      authCont.profile.profileName &&
      authCont.profile.profileMotto &&
      authCont.profile.avatar &&
      authCont.profile.services
    ) {
      authCont.setMember();
      console.log('set member');
    } else {
      console.log('ok')
    }
    //eslint-disable-next-line
  }, [authCont.profile, authCont.reference, authCont.offer]);

  return (
    <DashCont>
      <DashboardSettings />

      <MainSection />
    </DashCont>
  );
};

export default Dashboard;
