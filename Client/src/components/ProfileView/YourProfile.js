// Utilities
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCont from '../../context/user/userContext';
import AuthCont from '../../context/auth/authContext';

// Component

import Card from '../Utilities/CardRadius';
import CardRef from '../Utilities/CardRadiusRef';


// Styled Comp

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: linear-gradient(
    ${(props) => props.theme.colors.gradientPink},
    ${(props) => props.theme.colors.gradientYellow}
  ); */
  background: ${(props) => props.theme.colors.white};
  padding-top: 00px;
  /* border-radius: 4px; */
  width: 100%;
  /* height: 100%; */
  margin-bottom: 0px;
`;

const CardCont = styled.div`
width: 100%;
/* display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center; */
padding: 0px 5%;
display: grid;
place-items: center;
grid-template-columns: 50% 50%;
grid-gap: 0%;
background: white;

`



const SiteName = styled.h2`
  color: white;
  background: ${(props) => props.theme.colors.basicBlue};
  font-family: ${(props) => props.theme.fontFamily[5]};
  padding: 5px 10px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  width: 100%;
`;

const SubName = styled(SiteName)`
  width: 87%;
  background: ${(props) => props.theme.colors.primaryLight};
  box-shadow: 0px 0px 3px ${(props) => props.theme.colors.primaryDark};
  font-size: ${(props) => props.theme.fontSizes.half};
  color: ${props=>props.theme.colors.mainPurple};
  margin: 20px 0px;
`;

const OfferManagement = (props) => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);

  useEffect(() => {
    window.scrollTo(0, 0);
    // setUser({ ...user, languages: '' });
    // setUser({ ...user, selectedSkills: '' });
    // setUser({ ...user, selectedTags: '' });
    // console.log('USe Effect get profile ');
    // authCont.getProfile();
  }, []);

  return (
    <Cont>
      <SiteName>Your Profile</SiteName>
      <SubName>Your Service Offers</SubName>
      <CardCont>
        {!authCont.offer && <p>You dont have any offers yet.</p>}
        {authCont.offer &&
          authCont.offer.map((item, i) => {
            return (
              <Card
                title={item.title}
                src={authCont.profile.avatar}
                name={authCont.profile.profileName}
                notes={item.description}
                includesOne={item.includes[0]}
              />
            );
          })}
      </CardCont>
      <SubName>Your References</SubName>
      <CardCont>
        {!authCont.offer && <p>You dont have any offers yet.</p>}
        {authCont.reference &&
          authCont.reference.map((item, i) => {
            return (
              <CardRef
                title={item.position}
                projectName={item.projectName}
                src={authCont.profile.avatar}
                name={authCont.profile.profileName}
                notes={item.description}
                location={item.location}
              />
            );
          })}
      </CardCont>
    </Cont>
  );
};

export default OfferManagement;
