// Utilities
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCont from '../../context/user/userContext';
import AuthCont from '../../context/auth/authContext';
import Avatar from '../../graphics/avatar.png';

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
`;

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
  color: ${(props) => props.theme.colors.mainPurple};
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
  background: ${(props) => props.theme.colors.white};
  padding: 5px;
  flex-wrap: wrap;
`;

const Item = styled.p`
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  border-radius: 3px;
  padding: 3px;
  font-size: ${(props) => props.theme.fontSizes.xm};
  color: ${(props) => props.theme.colors.mainPurple};
  margin: 0px 10px 0px 0px;
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

const ProfileView = (props) => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log('avatar: ', authCont.currentProfile.avatar);

  return (
    <Cont>
      <SiteName>{authCont.currentProfile.profileName}</SiteName>

      <ContProf>
        <BoxLeft>
          <Span>
            <PicCont
              src={
                authCont.currentProfile.avatar
                  ? authCont.currentProfile.avatar
                  : Avatar
              }
            ></PicCont>
          </Span>
          <Span>
            <ItemDesc>{authCont.currentProfile.description}</ItemDesc>
          </Span>
        </BoxLeft>

        <BoxRight>
          <Span>
            <Label>based in</Label>
            <SpanForList>
              <Item>{authCont.currentProfile.location}</Item>
            </SpanForList>
          </Span>
          <Span>
            <Label>service fileds</Label>
            <SpanForList>
              {authCont.currentProfile.services.map((item, i) => {
                return <Item key={i}>{item}</Item>;
              })}
            </SpanForList>
          </Span>
          <Span>
            <Label>skills</Label>
            <SpanForList>
              {authCont.currentProfile.skills.map((item, i) => {
                return <Item key={i}>{item}</Item>;
              })}
            </SpanForList>
          </Span>
          <Span>
            <Label>education & certificates</Label>
            <SpanForList>
              {authCont.currentProfile.education.map((item, i) => {
                return <Item key={i}>{item}</Item>;
              })}
            </SpanForList>
          </Span>
          <Span>
            <Label>languages</Label>
            <SpanForList>
              {authCont.currentProfile.languages.map((item, i) => {
                return <Item key={i}>{item}</Item>;
              })}
            </SpanForList>
          </Span>
          <Span>
            <Label>web site</Label>
            <SpanForList>
              {authCont.currentProfile.website && (
                <Item>
                  <Anc href={authCont.currentProfile.website}>Instagram</Anc>
                </Item>
              )}
            </SpanForList>
          </Span>
          <Span>
            <Label>social media</Label>
            <SpanForList>
              {authCont.currentProfile.youtube && (
                <Item>
                  <Anc href={authCont.currentProfile.youtube}>Youtube</Anc>
                </Item>
              )}
              {authCont.currentProfile.twitter && (
                <Item>
                  <Anc href={authCont.currentProfile.twitter}>Twitter</Anc>
                </Item>
              )}

              {authCont.currentProfile.facebook && (
                <Item>
                  <Anc href={authCont.currentProfile.facebook}>Facebook</Anc>
                </Item>
              )}
              {authCont.currentProfile.linkedin && (
                <Item>
                  <Anc href={authCont.currentProfile.linkedin}>Linkedin</Anc>
                </Item>
              )}

              {authCont.currentProfile.instagram && (
                <Item>
                  <Anc href={authCont.currentProfile.instagram}>Instagram</Anc>
                </Item>
              )}
              {authCont.currentProfile.discogs && (
                <Item>
                  <Anc href={authCont.currentProfile.discogs}>Discogs</Anc>
                </Item>
              )}
              {authCont.currentProfile.bandcamp && (
                <Item>
                  <Anc href={authCont.currentProfile.bandcamp}>Bandcamp</Anc>
                </Item>
              )}
              {authCont.currentProfile.soundcloud && (
                <Item>
                  <Anc href={authCont.currentProfile.soundcloud}>
                    Soundcloud
                  </Anc>
                </Item>
              )}
            </SpanForList>
          </Span>
        </BoxRight>
      </ContProf>

      <SubName>Service Offers</SubName>
      <CardCont>
        {!authCont.offer && <p>You dont have any offers yet.</p>}
        {authCont.fetchedOffers &&
          authCont.fetchedOffers.map((item, i) => {
            if (item.user === authCont.currentProfile.user) {
              return (
                <Card
                  key={i}
                  title={item.title}
                  src={authCont.currentProfile.avatar}
                  name={authCont.currentProfile.profileName}
                  notes={item.description}
                  incOne={item.includes[0]}
                  incTwo={item.includes[1]}
                  link={item.links && item.links[0]}
                />
              );
            }
          })}
      </CardCont>
      <SubName>References</SubName>
      <CardCont>
        {!authCont.offer && <p>You dont have any offers yet.</p>}
        {authCont.fetchedReferences &&
          authCont.fetchedReferences.map((item, i) => {
            if (item.user === authCont.currentProfile.user) {
              return (
                <CardRef
                  title={item.position}
                  projectName={item.projectName}
                  src={authCont.currentProfile.avatar}
                  name={authCont.currentProfile.profileName}
                  notes={item.description}
                  location={item.location}
                  link={item.links[0]}
                />
              );
            }
          })}
      </CardCont>
    </Cont>
  );
};

export default ProfileView;
