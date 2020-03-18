// Utilities
import React, { useContext, useEffect} from 'react';
import styled from 'styled-components';
import AuthContext from '../../../context/auth/authContext';

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

  const authCont = useContext(AuthContext); 

  useEffect(()=>{
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
