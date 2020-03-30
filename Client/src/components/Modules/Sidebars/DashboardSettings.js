// Utilities
import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AuthCont from '../../../context/auth/authContext';

const FrameCont = styled.div`
  width: 15vw;
  padding: 1px;
  height: 70vh;
  background: linear-gradient(
    ${props => props.theme.colors.mainPurple},
    ${props => props.theme.colors.basicBlue}
  );
`;

const DashboardSidebar = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.white};
  /* border: 1px solid ${props => props.theme.colors.info}; */
  /* border-radius: 4px; */
  font-family: ${props => props.theme.fontFamily[5]};
  padding: 20px;
  box-shadow: 0px 0px 7px ${props => props.theme.colors.steelBlue};
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
const StyledActiveLink = {
  textDecoration: 'none',
  color: '#1C377B'
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
              <h2>{user.user.name}</h2>

              <Status>Pro</Status>
            </TitleDiv>
            <PicCont src={user.user.avatar}></PicCont>
            <List>
              <li>
                <NavLink
                  to='/dashboard/marked'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Marked Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/dashboard/network'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Your Network: 4
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/dashboard/edit-profile'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Edit Profile
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/dashboard/messages'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Messages
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/dashboard/settings'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Settings
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/dashboard/offer-management'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Offer Manager
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/dashboard/deals'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Actual Deals
                </NavLink>
              </li>
            </List>
          </Fragment>
        )}
      </DashboardSidebar>
    </FrameCont>
  );
};

export default DashboardSettings;
