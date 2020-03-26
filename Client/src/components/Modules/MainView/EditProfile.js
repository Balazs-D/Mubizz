// Utilities
import React, { useContext, useState, Fragment } from 'react';
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
import EditReadLine from '../../Utilities/EditProfile/EditReadLine';
import EditAddLine from '../../Utilities/EditProfile/EditAddLine';
import PicUpload from '../../Utilities/PicUpload/PicUpload';
import Note from '../../Utilities/Notes';
import ProcessDiagram from '../../Utilities/EditProfile/ProcessDiagram';
import IntroText from '../../Utilities/IntroText';

// Styled Comp

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
  height: 70%;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  /* width: 100%; */
  justify-content: center;
  align-content: flex-end;
  flex-direction: column;
  background: green;
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
  margin-top: 30px;
  font-weight: 200;
  font-family: ${props => props.theme.fontFamily[5]};
  letter-spacing: 1px;
  color: ${props => props.theme.colors.mainPurple};
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 0px;
  background-image: linear-gradient(
    ${props => props.theme.colors.white},
    ${props => props.theme.colors.white}
  );
  padding: 15px 0px;
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
  margin-top: 40px;
  background-image: linear-gradient(
    ${props => props.theme.colors.info},
    ${props => props.theme.colors.secondaryDecent}
  );
  box-shadow: 4px 4px 1px 0px ${props => props.theme.colors.info};
`;

const SiteName = styled.h2`
  color: white;
  background: ${props => props.theme.colors.basicBlue};
  font-family: ${props => props.theme.fontFamily[5]};
  padding: 5px 10px;

  width: 100%;
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
    <Fragment>
      <SiteName>Edit Profile</SiteName>

      <IntroText text='Update your profile to get access to the features you need!' />
      <ProcessDiagram />
      <Block>
        <Title>Basic User Infos</Title>
        <GradientContRadius>
          <Col>
            <Note text='Basic user information are hidden for the public view while your photo will be published.' />
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
              {user && <PicUpload />}
            </Ul>
          </Col>
        </GradientContRadius>
      </Block>

      <Block>
        <Title>Profile Infos</Title>
        <GradientContRadius>
          <Col>
            <NoteWrap>
              <Notes>
                Profile information are public. You need to fill all fields to
                be able to interact and create references.
              </Notes>
            </NoteWrap>
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
          </Col>
        </GradientContRadius>
      </Block>

      <Block>
        <Title>Membership Infos</Title>
        <GradientContRadius>
          <Col>
            <NoteWrap>
              <Notes>
                Membership information are public. You need to fill all fields
                to be able to post offers.
              </Notes>
            </NoteWrap>
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
                <EditAddLine
                  title={'Skills & Technologies: '}
                  value=''
                  placeholder='Ex.: Pro Tools / Overdub Recording ... '
                  onClick={userCont.editToggle}
                />
              )}
            </Ul>
          </Col>
        </GradientContRadius>
      </Block>

      <Block>
        <GradientContRadius>
          <Title>Works</Title>
          <Col>
            <NoteWrap>
              <Notes>
                After you created at least one of each item your profile will
                reach the PRO level.
              </Notes>
            </NoteWrap>
            <Ul>
              <EditReadLine title='Offers' value='5'></EditReadLine>
              <EditReadLine title='References' value='7'></EditReadLine>
            </Ul>
          </Col>
        </GradientContRadius>
      </Block>
    </Fragment>
  );
};

export default EditProfile;
