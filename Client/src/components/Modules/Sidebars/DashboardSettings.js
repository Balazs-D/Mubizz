// Utilities
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DashboardSidebar = styled.div`
  width: 20%;
  height: 50vh;
  background: white;
  border: 1px solid ${props => props.theme.colors.mainPurple};
  border-radius: 4px;
  font-family: ${props => props.theme.fontFamily[0]};
  padding: 20px;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Status = styled.h5`
  color: ${props => props.theme.colors.gradientYellow};
  background: ${props => props.theme.colors.mainRed};
  border-radius: 25vw;
  border: 1px solid ${props => props.theme.colors.mainPurple};
  font-family: ${props => props.theme.fontFamily[4]};
  font-weight: 100;
  padding: 0 10px;
  line-height: 2;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0;
`;
const StyledLink = {
  textDecoration: 'none'
};

const DashboardSettings = ({ Name }) => {
  return (
    <DashboardSidebar>
      <TitleDiv>
        <h2>Billy John Bob</h2>
        <Status>Pro</Status>
      </TitleDiv>
      <List>
        <li>
          <Link to='/dashboard/marked' style={StyledLink}>
            Marked Posts
          </Link>
        </li>
        <li>
          <Link to='/dashboard/network' style={StyledLink}>
            Your Network: 4
          </Link>
        </li>

        <li>
          <Link to='/dashboard/edit-profile' style={StyledLink}>
            Edit Profile
          </Link>
        </li>

        
        <li>
          <Link to='/dashboard/messages' style={StyledLink}>
            Messages
          </Link>
        </li>

        <li>
          <Link to='/dashboard/settings' style={StyledLink}>
            Settings
          </Link>
        </li>

        <li>
          <Link to='/dashboard/offer-management' style={StyledLink}>
            Offer Manager
          </Link>
        </li>

        <li>
          <Link to='/dashboard/deals' style={StyledLink}>
            Actual Deals
          </Link>
        </li>
      </List>
    </DashboardSidebar>
  );
};

export default DashboardSettings;
