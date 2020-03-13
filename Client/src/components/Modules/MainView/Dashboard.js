// Utilities
import React from 'react';
import styled from 'styled-components';

// Components
import MainSection from './MainSection';
import DashboardSettings from '../Sidebars/DashboardSettings';


// Components

// Styled Components
const DashCont = styled.div`
  width: 100vw;
  display: flex;
  background: white;
  justify-content: space-between;
  padding: 20px;
`;

const Dashboard = () => {
  return (
    <DashCont>
      <DashboardSettings />

      <MainSection />
    </DashCont>
  );
};

export default Dashboard;
