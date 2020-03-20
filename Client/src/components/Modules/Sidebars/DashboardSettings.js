// Utilities
import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthCont from '../../../context/auth/authContext';

const FrameCont = styled.div`
  width: 20%;
  height: 50vh;
  padding: 0vh;
  background: linear-gradient(
    ${props => props.theme.colors.primaryDark},
    ${props => props.theme.colors.primaryDark}
  );
`;

const DashboardSidebar = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.info};
  box-shadow: inset 4px 4px 8px ${props => props.theme.colors.white};
  /* border-radius: 4px; */
  font-family: ${props => props.theme.fontFamily[5]};
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
  height: 28px;
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

const PicCont = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  margin: 1.5vw 0vh 0vw 0vh;
  border:1px solid  ${props=>props.theme.colors.info};
`;


const StyledLink = {
  textDecoration: 'none',
  color: '#30BF97'
  
};

const DashboardSettings = () => {
  const authCont = useContext(AuthCont);
  const { user } = authCont;

  return (
    <FrameCont>
      <DashboardSidebar>
        {user && (
          <Fragment>
            <TitleDiv>
              <h2>{user.name}</h2>

              <Status>Pro</Status>
            </TitleDiv>
            <PicCont src={user.avatar}></PicCont>
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
          </Fragment>
        )}
      </DashboardSidebar>
    </FrameCont>
  );
};

export default DashboardSettings;
