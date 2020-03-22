// Utilities
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Component

import Input from '../../Utilities/Input';
import BoardCont from '../../Utilities/BoardCont';
import ButtonLight from '../../Utilities/ButtonLight';
import EditSoloLine from '../../Utilities/EditProfile/EditSoloLine';
import EditTextArea from '../../Utilities/EditProfile/EditTextArea';
import EditTagItem from '../../Utilities/EditProfile/EditTagItem';
import IntroText from '../../Utilities/IntroText';

// Styled Comp

const GradientCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${props => props.theme.colors.mainPurple},
    ${props => props.theme.colors.info}
  );
  padding: 1px;
`;

const GradientContRadius = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${props => props.theme.colors.mainPurple},
    ${props => props.theme.colors.mainPurple}
  );
  padding: 1px 0px 0px 0px;
  /* border-radius: 4px; */
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
`;

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 0px;
width: 55vw;
margin-right: 0%;
position: relative;

z-index: 0;
background: ${props => props.theme.colors.white};

/* border: 1px solid ${props => props.theme.colors.mainPurple}; */
`;

const Form = styled.form`
  display: flex;
  /* width: 100%; */
  justify-content: center;
  align-content: flex-end;
  flex-direction: column;
  background: green;
`;

const SiteName = styled.h2`
  color: white;
  background: ${props => props.theme.colors.mainPurple};
  font-family: ${props => props.theme.fontFamily[5]};
  padding: 5px 10px;

  width: 100%;
`;

const ContDiv = styled.form`
  width: 100%;
  /* border: 1px solid ${props => props.theme.colors.info}; */
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
  width: 100%;
  margin: 30px 0px 0px 0px;
  align-items: center;
  justify-content: center;
  display: flex;
position: relative;
  flex-direction: column;
`;

const Title = styled.h3`
  background: white;
position: relative; 
z-index: 10;
  font-weight: light;
  padding: 0px 15px 0px 15px;
  font-family: ${props => props.theme.fontFamily[5]};
  color: ${props => props.theme.colors.mainPurple};
  position: absolute;
  top: -15px;
  border: 2px solid ${props => props.theme.colors.mainPurple};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-around;
  width: 50%;
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
  position: relative;
  width: 100%;
  background-image: linear-gradient(
    ${props => props.theme.colors.white},
    ${props => props.theme.colors.white}
  );

  /* border: 1px solid ${props => props.theme.colors.mainPurple}; */
  padding: 15px 0px;
  /* border-radius: 4px; */
`;
const Notes = styled.div`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.info};
  background: ${props => props.theme.colors.white};
  padding: 10px;
  text-align: justify;
  
 
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fontFamily[4]};
  position: relative;
`;

const NoteWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding: 1px;
  /* margin: 5% 7% 0px 0px; */
  position: absolute;
  right: 5%;
  top: 25%;
  background-image: linear-gradient(
    ${props => props.theme.colors.secondaryDecent},
    ${props => props.theme.colors.mainPurple}
  );
  box-shadow: 4px 4px 1px 0px ${props => props.theme.colors.warning};
`;

const Icon = styled.p`
  position: absolute;
  width: 20px;
  height: 20px;
  /* transform: translate(50%, 50%); */
  display: flex;
  align-items: center;
  justify-content: center;
  left: -20px;
  top: 10%;
  background: ${props => props.theme.colors.info};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0px 0px 3px ${props => props.theme.colors.info};

  color: white;
`;

const HeaderText = styled.h3`
  width: 150%;
  font-size: ${props => props.theme.fontSizes.small};
`;

const H4 = styled.h4`
  width: 80%;
  font-size: ${props => props.theme.fontSizes.small};
`;

const EditProfile = () => {
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);
  const { user } = authCont;

  const onChange = e => {
    console.log({ ...user, [e.target.name]: e.target.value });
  };

  console.log(userCont);
  // If schema is done then map through schema use each info section
  // Then map through the info section and insert option to each section
  return (
    <GradientCont>
      <Main>
        <ContDiv>
          <SiteName>Edit Profile</SiteName>
          <IntroText text='Here we goooooo....!!!' />
          <Block>
            <Title>Basic User Infos</Title>
            <GradientContRadius>
              <Row>
                <Ul>
                  {user && (
                    <EditSoloLine
                      title={'Name: '}
                      onClick={userCont.editToggle}
                      onChange={onChange}
                      value={user.name}
                    />
                  )}
                  {user && (
                    <EditSoloLine
                      title={'E-Mail: '}
                      onClick={userCont.editToggle}
                      value={user.email}
                    />
                  )}
                  {user && (
                    <EditSoloLine
                      title={'Password: '}
                      value={user.password}
                      onClick={userCont.editToggle}
                    />
                  )}
                </Ul>
                <NoteWrap>
                  <Notes>
                    Basic user informations are hidden for the public view.{' '}
                  </Notes>
                </NoteWrap>
              </Row>
            </GradientContRadius>
          </Block>

          <Block>
            <Title>Profile Infos</Title>
            <GradientContRadius>
              <Row>
                <Ul>
                  {user && (
                    <EditSoloLine
                      title={'Profile Name: '}
                      titleVal={user.name}
                      onClick={userCont.editToggle}
                      onChange={onChange}
                      value='King Mastering'
                    />
                  )}
                  {user && (
                    <EditTextArea
                      title={'Message: '}
                      titleVal={user.email}
                      onClick={userCont.editToggle}
                      value={user.email}
                    />
                  )}
                  {user && (
                    <EditTagItem
                      title={'Service Fields: '}
                      value=''
                      onClick={userCont.editToggle}
                    />
                  )}
                </Ul>
                <NoteWrap>
                  <Notes>
                    Profile information are public. You need to fill all fields
                    to be able to interact and create refferences.
                  </Notes>
                </NoteWrap>
              </Row>
            </GradientContRadius>
          </Block>

          <Block>
            <Title>Membership Infos</Title>
            <GradientContRadius>
              <Row>
                <Ul>
                  {user && (
                    <EditSoloLine
                      title={'Location: '}
                      titleVal={user.name}
                      onClick={userCont.editToggle}
                      onChange={onChange}
                      value='Berlin'
                    />
                  )}
                  {user && (
                    <EditTextArea
                      title={'Detailed Description: '}
                      titleVal={user.email}
                      onClick={userCont.editToggle}
                      value={user.email}
                    />
                  )}
                  {user && (
                    <EditTagItem
                      title={'Skills & Technologies: '}
                      value=''
                      onClick={userCont.editToggle}
                    />
                  )}
                </Ul>
                <NoteWrap>
                  <Notes>
                    Membership information are public. You need to fill all
                    fields to be able to offers.
                  </Notes>
                </NoteWrap>
              </Row>
            </GradientContRadius>
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
    </GradientCont>
  );
};

export default EditProfile;
