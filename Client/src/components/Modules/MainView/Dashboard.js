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
  /* border-top: 2px solid ${props => props.theme.colors.secondaryDecent}; */
`;

const Dashboard = ({ match }) => {
  const authCont = useContext(AuthContext);

  useEffect(() => {
    authCont.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <DashCont>
      <DashboardSettings />

      <MainSection />
    </DashCont>
  );
};

export default Dashboard;
