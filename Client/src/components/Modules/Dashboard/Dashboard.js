// Utilities
import React from 'react';
import styled from 'styled-components';
import MainSection from './MainSection';

// Components

// Styled Components
const DashCont = styled.div`
  width: 100vw;
  background: lightblue;
  display: flex;
  justify-content: space-between;
  background: lightgreen;
`;

const Dashboard = () => {
    return (
        <DashCont>
        <h2>D A S H B O A R D</h2>
        <MainSection />
            
        </DashCont>
    )
};

export default Dashboard
