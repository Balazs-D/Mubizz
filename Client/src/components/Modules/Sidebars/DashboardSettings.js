// Utilities
import React, { useContext, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AuthCont from '../../../context/auth/authContext';
import UserCont from '../../../context/user/userContext';

// COmp

import Status from '../../Utilities/StatusDisplay';
import BlinkInfoField from '../../Utilities/ProfileSection/BlinkInfoField';

// Styled Comp

const FrameCont = styled.div`
  width: 23vw;
  padding: 1px;
  height: 100vh;
  background: linear-gradient(
    ${(props) => props.theme.colors.mainPurple},
    ${(props) => props.theme.colors.basicBlue}
  );
`;

const DashboardSidebar = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  /* border: 1px solid ${(props) => props.theme.colors.info}; */
  /* border-radius: 4px; */
  font-family: ${(props) => props.theme.fontFamily[5]};
  padding: 20px;
  box-shadow: 0px 0px 7px ${(props) => props.theme.colors.steelBlue};
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 3px solid ${(props) => props.theme.colors.mainPurple};
  padding-left: 10px;
  justify-content: flex-start;
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

const Li = styled(NavLink)`
  margin: 0px 0px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
  transition: all 0.3s ease-in;
  color: ${(props) => props.theme.colors.info};
  display: flex; 
  justify-content: space-between;

  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.primaryDark};
  }
`;

const Row = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const Box = styled.p`
padding: 0px 2px;
border: 1px solid ${props=>props.theme.colors.info};
border-radius: 3px;
background: white;`

const PicCont = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 1.5vw 0vh 0vw 0vh;
  border: 1px solid ${(props) => props.theme.colors.info};
`;

const StyledLink = {
  textDecoration: 'none',
  // color: '#30BF97',
  width: '100%',
  // border: '1px solid #41B883',
  // borderRadius: '3px',
  // padding: '5px',
  // marginBottom: '10px',
};
const StyledActiveLink = {
  textDecoration: 'none',
  // color: '#1C377B',
  color: '#272B2B',
  background: '#6D87B9',
};

const DashboardSettings = () => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);
  const { user, profile } = authCont;

  // const editRef = useRef();
  // const offersRef = useRef();
  // const refRef = useRef();
  // const messRef = useRef();

  return (
    <FrameCont>
      <DashboardSidebar>
        {user && (
          <Fragment>
            <TitleDiv>
              {profile.profileName ? (
                <h2>{profile.profileName}</h2>
              ) : (
                <h2>{user.name}</h2>
              )}
              {/* {profile.profileName ? <h3>{user.name}</h3> : null } */}
              <Row>
                <Status />
                {!authCont.pro && (
                  <BlinkInfoField text='Update your profile to upgrade our status.' />
                )}
              </Row>
            </TitleDiv>
            <PicCont src={profile.avatar ? profile.avatar : null}></PicCont>
            <List>
              {/* <li>
                <NavLink
                  to='/dashboard/marked'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Marked Posts
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to='/dashboard/network'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Your Network: 4
                </NavLink>
              </li> */}

              {/* <Li> */}

              <Li
                to='/dashboard/your-profile'
                activeStyle={StyledActiveLink}
                style={StyledLink}
              >
                Your Profile
              </Li>

              <Li
                to='/dashboard/edit-profile'
                activeStyle={StyledActiveLink}
                style={StyledLink}
              >
                Edit Profile
              </Li>
              {/* </Li> */}

              {/* <Li> */}
              <Li
                to='/dashboard/reference-management'
                activeStyle={StyledActiveLink}
                style={StyledLink}
              >
                <p>Reference Manager</p>
                <Box>{authCont.reference.length}</Box>
              </Li>
              {/* </Li> */}

              {/* <Li> */}
              <Li
                to='/dashboard/offer-management'
                activeStyle={StyledActiveLink}
                style={StyledLink}
              >
                <p>Offer Manager</p>
                <Box>{authCont.offer.length}</Box>
              </Li>
              {/* </Li> */}

              {/* <Li> */}
              <Li
                to='/dashboard/messages'
                activeStyle={StyledActiveLink}
                style={StyledLink}
              >
                <p>Messages</p>
                <Box>0</Box>
              </Li>
              {/* </Li> */}

              {/* <li>
                <NavLink
                  to='/dashboard/settings'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Settings
                </NavLink>
              </li> */}

              {/* <li>
                <NavLink
                  to='/dashboard/deals'
                  activeStyle={StyledActiveLink}
                  style={StyledLink}
                >
                  Actual Deals
                </NavLink>
              </li> */}
            </List>
          </Fragment>
        )}
      </DashboardSidebar>
    </FrameCont>
  );
};

export default DashboardSettings;
