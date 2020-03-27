// Utilities
import React, { useContext, useState  } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Component


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
  display: contents;
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
  const authCont = useContext(AuthCont);

  const [user, setUser] = useState({
    name:'',
    email:'',
    profileName:'',
    profileMotto:'',
    description:'',
    services:'',
    website:'',
    location:'',
    languages:'',
    skills:'',
    reference:'',
    social:''
  });

  const {
    name,
    email,
    profileName,
    profileMotto,
    description,
    services,
    website,
    location,
    languages,
    skills,
    reference,
    social
  } = user;




  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);

  };

  console.log(user);

  const onSubmit = e => {
    e.preventDefault();
    console.log('on submit');
    //  if (name === '' || email === '' || password === '') {
    //    setAlert('Please enter all fields');
    //    console.log('error 02');
    //  }
    //  if (error === 'User already exists') {
    //    setAlert(error);
    //    clearErrors();
    //  } else {
      console.log('test 01')
    authCont.update({
      // FormData
      name,
      email,
      profileName,
      profileMotto,
      description,
      services,
      website,
      location,
      languages,
      skills,
      reference,
      social
    });
      console.log('test 02');

    console.log(authCont);
  };

  
  // If schema is done then map through schema use each info section
  // Then map through the info section and insert option to each section
  return (
    <Form onSubmit={onSubmit}>
      <SiteName>Edit Profile</SiteName>

      <IntroText text='Update your profile to get access to the features you need!' />
      <ProcessDiagram />
      <Block>
        <Title>Basic User Infos</Title>
        <GradientContRadius>
          <Col>
            <Note text='Basic user information are hidden for the public view while your photo will be published.' />
            <Ul>
              {authCont.user && (
                <EditSoloLine
                  title={'Name: '}
                  onChange={onChange}
                  value={name}
                  name='name'
                />
              )}
              {authCont.user && (
                <EditSoloLine title={'E-Mail: '} value={email} name='email' />
              )}
              {authCont.user && (
                <EditSoloLine title={'Password: '} name='password' />
              )}
              {authCont.user && <PicUpload />}
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
              {authCont.user && (
                <EditSoloLine
                  title={'Profile Name: '}
                  onChange={onChange}
                  value={profileName}
                  name='profileName'
                />
              )}
              {authCont.user && (
                <EditTextArea
                  title={'Message: '}
                  value={profileMotto}
                  name='profileMotto'
                />
              )}
              {authCont.user && (
                <EditTagItem
                  title={'Service Fields: '}
                  value={services}
                  name='services'
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
              {authCont.user && (
                <EditSoloLine
                  title={'Location: '}
                  onChange={onChange}
                  value={location}
                  name='location'
                />
              )}
              {authCont.user && (
                <EditTextArea
                  title={'Detailed Description: '}
                  value={description}
                  name='description'
                />
              )}
              {authCont.user && (
                <EditAddLine
                  title={'Skills & Technologies: '}
                  value={skills}
                  placeholder='Ex.: Pro Tools / Overdub Recording ... '
                  name='skills'
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
      <button type='submit' onClick={onSubmit}>
        SUBMIT
      </button>
    </Form>
  );
};

export default EditProfile;
