// Utilities
import React, { useContext } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Component

import Input from '../../Utilities/Input';
import BoardCont from '../../Utilities/BoardCont';
import LightButton from '../../Utilities/LightButton';

// Styled Comp

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
padding: 0px;
width: 100%;
margin-right: 5%;
position: relative;
z-index: 0;

/* border: 1px solid ${props => props.theme.colors.mainPurple}; */
`;

const SiteName = styled.h2`
  color: white;
  background: ${props => props.theme.colors.info};
  font-family: ${props => props.theme.fontFamily[5]};
  padding: 5px 10px;

  width: 100%;
`;

const ContDiv = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.info};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px;
`;

const InputEdit = styled(Input)`
  padding: 1px;
  margin: 0px 85px 0px 0px;
  &:focus {
    background: ${props => props.theme.colors.white};
  }
`;

const Block = styled.div`
  width: 90%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  background: white;
  margin-bottom: 10px;
  width: 100%;
  font-weight: light;
  padding: 20px 15px 0px 15px;
  font-family: ${props => props.theme.fontFamily[5]};
  color: ${props => props.theme.colors.mainPurple};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  padding: 0px 20px;
  font-weight: 200;
  font-family: ${props => props.theme.fontFamily[5]};
  letter-spacing: 1px;
  color: ${props => props.theme.colors.mainPurple};
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;

  border: 1px solid ${props => props.theme.colors.mainPurple};
  padding: 15px 0px;
  border-radius: 4px;
`;
const Notes = styled.p`
  width: 25%;
  border: 1px solid ${props => props.theme.colors.info};
  color: ${props => props.theme.colors.info};
  border-radius: 4px;
  padding: 20px;
  text-align: justify;
  margin-left: 70px;
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fontFamily[4]};
  position: relative;
`;

const Icon = styled.p`
  position: absolute;
  width: 20px;
  height: 20px;
  /* transform: translate(50%, 50%); */
  display: flex;
  align-items: center;
  justify-content: center;
  left: -5.55%;
  top: 10%;
  background: ${props => props.theme.colors.info};
  border-radius: 50%;
  color: white;
`;

const HeaderText = styled.h3`
  width: 150%;
  font-size: ${props => props.theme.fontSizes.small};
`;

const H4 = styled.h4`
  width: 70%;
  font-size: ${props => props.theme.fontSizes.small};
`;

const EditProfile = () => {
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);
  const { user } = authCont;

  console.log(userCont);
  // If schema is done then map through schema use each info section
  // Then map through the info section and insert option to each section
  return (
    <Main>
      <ContDiv>
        <SiteName>Edit Profile</SiteName>

        <Block>
          <Title>Basic User Infos</Title>
          <Row>
            <Ul>
              <Li>
                <H4>Name:</H4>
                {userCont.edit ? (
                  <InputEdit />
                ) : user ? (
                  <HeaderText>{user.name}</HeaderText>
                ) : null}
                {userCont.edit ? (
                  <LightButton
                    onClick={userCont.saveToggle}
                    text='Save'
                  ></LightButton>
                ) : (
                  <LightButton
                    onClick={userCont.editToggle}
                    text='Edit'
                  ></LightButton>
                )}
              </Li>
              <Li>
                <H4>E-Mail:</H4>
                {user ? <HeaderText>{user.email}</HeaderText> : null}{' '}
                {userCont.edit ? (
                  <LightButton
                    onClick={userCont.saveToggle}
                    text='Save'
                  ></LightButton>
                ) : (
                  <LightButton
                    onClick={userCont.editToggle}
                    text='Edit'
                  ></LightButton>
                )}
              </Li>
              <Li>
                <H4>Password:</H4>
                <HeaderText>**********</HeaderText>
                {userCont.edit ? (
                  <LightButton
                    onClick={userCont.saveToggle}
                    text='Save'
                  ></LightButton>
                ) : (
                  <LightButton
                    onClick={userCont.editToggle}
                    text='Edit'
                  ></LightButton>
                )}
              </Li>
            </Ul>
            <Notes>
              <Icon>i</Icon>
              Basic user informations are hidden for the public view.{' '}
            </Notes>
          </Row>
        </Block>

        <Block>
          <Title>Profile Infos</Title>
          <Ul>
            <Li>
              <H4>Profile Name:</H4>
              <HeaderText>Bucky`s Mastering (Visible in profile)</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Description:</H4>
              <HeaderText>Max 160 character</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Offered Services:</H4>
              <HeaderText>
                Selected by tags: Sound Technic, Singer, Musician
              </HeaderText>
              <p>edit</p>
            </Li>
          </Ul>
        </Block>

        <Block>
          <Title>Membership Infos</Title>
          <Ul>
            <Li>
              <H4>Location</H4>
              <HeaderText>Berlin</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Detailed Description:</H4>
              <HeaderText>Max 1000 character</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Skills & Technologies</H4>
              <HeaderText>
                Pro Tools pro user, Microphones & Recording, Outdoor recording{' '}
              </HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Languages:</H4>
              <HeaderText>English, German</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Degrees & Certificates:</H4>
              <HeaderText>
                School or Project, Degree or Position (li)
              </HeaderText>

              <p>edit</p>
            </Li>
          </Ul>
        </Block>

        <Block>
          <Title>Works</Title>
          <Ul>
            <Li>
              <H4>Offers</H4>
              <HeaderText>3</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Refferences</H4>
              <HeaderText>5</HeaderText>
              <p>edit</p>
            </Li>
          </Ul>
        </Block>
      </ContDiv>
    </Main>
  );
};

export default EditProfile;
