// Utilities
import React, {useContext} from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';

// Component

import Input from '../../Utilities/Input';

// Styled Comp

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
padding: 5px;
width: 100%;
margin-right: 5%;
position: relative;
z-index: 0;

/* border: 1px solid ${props => props.theme.colors.mainPurple}; */
`;

const SiteName = styled.h4`
  color: white;
  background: ${props => props.theme.colors.mainLightBlue};
  font-family: ${props => props.theme.fontFamily[0]};
  padding: 5px 10px;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.mainPurple};
  border-right: 1px solid ${props => props.theme.colors.mainPurple};
  border-left: 1px solid ${props => props.theme.colors.mainPurple};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ContDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.mainPurple};
  border-right: 1px solid ${props => props.theme.colors.mainPurple};
  border-left: 1px solid ${props => props.theme.colors.mainPurple};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Block = styled.div`
  width: 60%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  background: white;
  margin-bottom: 10px;
  width: 100%;
  font-weight: light;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

  const userCont = useContext(UserCont)

  console.log(userCont)
  // If schema is done then map through schema use each info section
  // Then map through the info section and insert option to each section
  return (
    <Main>
      <SiteName>Edit Profile</SiteName>
      <ContDiv>
        <Block>
          <Title>Basic User Infos</Title>
          <Ul>
            <Li>
              <H4>Name:</H4>
              {userCont.edit ? (
                <Input />
              ) : (
                <HeaderText>Thoam Jefferson Bucky</HeaderText>
              )}
              {userCont.edit ? (
                <button onClick={userCont.saveToggle}>save</button>
              ) : (
                <button onClick={userCont.editToggle}>edit</button>
              )}
            </Li>
            <Li>
              <H4>E-Mail:</H4>
              <HeaderText>me@gmail.com</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Password:</H4>
              <HeaderText>**********</HeaderText>
              <p>edit</p>
            </Li>
          </Ul>
        </Block>

        <Block>
          <Title>Profile Infos</Title>
          <Ul>
            <Li>
              <H4>Profile Name:</H4>
              <HeaderText>Bucky`s Mastering</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Description:</H4>
              <HeaderText></HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Offered Services:</H4>
              <HeaderText></HeaderText>
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
              <HeaderText></HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Skills:</H4>
              <HeaderText></HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Languages:</H4>
              <HeaderText>English, German</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <H4>Degrees & Certificates:</H4>
              <HeaderText>English, German</HeaderText>
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
