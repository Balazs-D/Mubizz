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

const ContProf = styled.div`
  width: 87%;
  display: flex;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fontFamily[4]};
  background: ${(props) => props.theme.colors.white};
`;

const BoxLeft = styled.div`
  width: 48%;
  color: ${(props) => props.theme.colors.mainPurple};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding: 5px; */
`;

const BoxRight = styled.div`
  width: 48%;
  color: ${(props) => props.theme.colors.mainPurple};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* padding: 5px; */
`;

const Span = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 10px;
  /* border: 1px solid ${(props) => props.theme.colors.mainPurple}; */
  border-radius: 3px;
  /* padding: 5px; */
`;

const SpanForList = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  flex-wrap: wrap;

  background: ${(props) => props.theme.colors.white};
  padding: 5px;
`;

const Item = styled.p`
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  border-radius: 3px;
  padding: 3px;
  font-size: ${(props) => props.theme.fontSizes.xm};
  color: ${(props) => props.theme.colors.mainPurple};
  margin-right: 10px;
`;

const ItemDesc = styled(Item)`
  font-size: ${(props) => props.theme.fontSizes.small};
  width: 100%;
  padding: 10px;
`;

const Label = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.info};
`;

const PicCont = styled.div`
  width: 100%;
  height: 20vh;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  border-radius: 3px;
`;

const Anc = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.mainPurple};
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

      <ContProf>
        <BoxLeft>
          <Span>
            <Span>
              <Label>your motto / message</Label>
              <ItemDesc>{authCont.profile.profileMotto}</ItemDesc>
            </Span>
          </Span>
          <Span>
            <Label>your profile description</Label>
            <ItemDesc>{authCont.profile.description}</ItemDesc>
          </Span>
        </BoxLeft>

        <BoxRight>
          <Span>
            <Label>based in</Label>
            <SpanForList>
              <Item>{authCont.profile.location}</Item>
            </SpanForList>
          </Span>
          <Span>
            <Label>service fields</Label>
            <SpanForList>
              {authCont.profile.services.map((item, i) => {
                return <Item key={i}>{item}</Item>;
              })}
            </SpanForList>
          </Span>
          <Span>
            <Label>skills</Label>
            <SpanForList>
              {authCont.profile.skills.map((item, i) => {
                return <Item key={i}>{item}</Item>;
              })}
            </SpanForList>
          </Span>
          <Span>
            <Label>education & certificates</Label>
            <SpanForList>
              {authCont.profile.education.map((item, i) => {
                return <Item key={i}>{item}</Item>;
              })}
            </SpanForList>
          </Span>
          <Span>
            <Label>languages</Label>
            <SpanForList>
              {authCont.profile.languages.map((item, i) => {
                return <Item key={i}>{item}</Item>;
              })}
            </SpanForList>
          </Span>
          <Span>
            <Label>web site</Label>
            <SpanForList>
              {authCont.profile.website && (
                <Item>
                  <Anc href={authCont.profile.website}>Instagram</Anc>
                </Item>
              )}
            </SpanForList>
          </Span>
          <Span>
            <Label>social media</Label>
            <SpanForList>
              {authCont.profile.youtube && (
                <Item>
                  <Anc href={authCont.profile.youtube}>Youtube</Anc>
                </Item>
              )}
              {authCont.profile.twitter && (
                <Item>
                  <Anc href={authCont.profile.twitter}>Twitter</Anc>
                </Item>
              )}

              {authCont.profile.facebook && (
                <Item>
                  <Anc href={authCont.profile.facebook}>Facebook</Anc>
                </Item>
              )}
              {authCont.profile.linkedin && (
                <Item>
                  <Anc href={authCont.profile.linkedin}>Linkedin</Anc>
                </Item>
              )}

              {authCont.profile.instagram && (
                <Item>
                  <Anc href={authCont.profile.instagram}>Instagram</Anc>
                </Item>
              )}
              {authCont.profile.discogs && (
                <Item>
                  <Anc href={authCont.profile.discogs}>Discogs</Anc>
                </Item>
              )}
              {authCont.profile.bandcamp && (
                <Item>
                  <Anc href={authCont.profile.bandcamp}>Bandcamp</Anc>
                </Item>
              )}
              {authCont.profile.soundcloud && (
                <Item>
                  <Anc href={authCont.profile.soundcloud}>Soundcloud</Anc>
                </Item>
              )}
            </SpanForList>
          </Span>
        </BoxRight>
      </ContProf>
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
                incOne={item.includes[0]}
                incTwo={item.includes[1]}
                link={item.links[0]}
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
                link={item.links[0]}
              />
            );
          })}
      </CardCont>
    </Cont>
  );
};

export default OfferManagement;
