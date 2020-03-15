// Utilities
import React from 'react';
import styled from 'styled-components';

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
  width: 80%;
  margin-bottom: 30px;
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
  width: 100%;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.h3`
  width: 150%;
`;

const EditProfile = () => {
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
              <HeaderText>Name: Thoam Jefferson Bucky</HeaderText>
              <p>edit</p>
              <Input placeholder='Change profile name...' />
            </Li>
            <Li>
              <HeaderText>E-Mail: me@gmail.com</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <HeaderText>Password: **********</HeaderText>
              <p>edit</p>
            </Li>
          </Ul>
        </Block>

        <Block>
          <Title>Profile Infos</Title>
          <Ul>
            <Li>
              <HeaderText>Profile Name: Bucky`s Mastering</HeaderText>
              <p>edit</p>
              <Input placeholder='Change profile name...' />
            </Li>
            <Li>
              <HeaderText>Description</HeaderText>
              <p>edit</p>
            </Li>
            <Li>
              <HeaderText>Offered Services</HeaderText>
              <p>edit</p>
            </Li>
          </Ul>
        </Block>
      </ContDiv>
    </Main>
  );
};

export default EditProfile;
