// Utilities
import React, { useContext, useState, useEffect, Fragment } from 'react';
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
import userContext from '../../../context/user/userContext';
import DiagramStep from '../../Utilities/EditProfile/DiagramStep';

// Styled Comp

const GradientContRadius = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${props => props.theme.colors.mainPurple},
    ${props => props.theme.colors.mainPurple}
  );
  padding: 1px;
  /* border-radius: 4px; */
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
`;

const Form = styled.form`
  display: contents;
`;

const Block = styled.div`
  width: 51%;
  /* margin: 00px 0px 0px 0px; */
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  background: green;

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
  justify-content: center;
  align-items: space-around;
  width: 90%;
  padding: 0px 20px;
  margin-top: 30px;
  font-weight: 200;
  font-family: ${props => props.theme.fontFamily[5]};
  letter-spacing: 1px;
  color: ${props => props.theme.colors.white};
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 0px;
  background-image: linear-gradient(
    ${props => props.theme.colors.white},
    ${props => props.theme.colors.white}
  );
  padding: 15px 0px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  background: white;
  justify-content: center;
  padding: 50px 0px;

  flex-direction: row;
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

const EditProfile = props => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);

  const [user, setUser] = useState({
    email: `${authCont.user.email}`,
    profileName: `${authCont.profile.profileName}`,
    profileMotto: `${authCont.profile.profileMotto}`,
    description: `${authCont.profile.description}`,
    services: `${authCont.profile.services}`,
    website: `${authCont.profile.website}`,
    location: `${authCont.profile.location}`,
    languages: [`${authCont.profile.languages}`],
    skills: [{}],
    reference: [],
    social: {},
    offers: {}
  });

  const {
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
    social,
    offers
  } = user;

  useEffect(() => {
    console.log('USe Effect get profile ');
    authCont.getProfile();
  }, []);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };



  console.log(userCont.selectedTags);

  useEffect(()=>{
  setUser({ ...user, services: userCont.selectedTags });
console.log(user.services)
  }, [userCont.selectedTags]);

  const onSubmit = async e => {
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
    console.log('test 01');
    await authCont.update({
      // FormData
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
      social,
      offers
    });

    props.history.push('/dashboard/edit-profile');
    console.log('on submit get profile ');
    console.log(authCont);
    await authCont.getProfile();
  };

  console.log(authCont);
  console.log(user);
  // If schema is done then map through schema use each info section
  // Then map through the info section and insert option to each section
  return (
    <Form onSubmit={onSubmit}>
      <SiteName>Edit Profile</SiteName>

      <IntroText text='Update your profile to get access to the features you need!' />
      <Row>
        <DiagramStep title='Basic User Infos' />

        <Block>
          {/* <Title>Basic User Infos</Title> */}
          <GradientContRadius>
            <Col>
              <Ul>
                {authCont.user && (
                  <EditSoloLine
                    title={'Name: '}
                    onChange={onChange}
                    value={authCont.user.name}
                    name='name'
                    label='name'
                  />
                )}
                {authCont.user && (
                  <EditSoloLine
                    title={'E-Mail: '}
                    value={email}
                    name='email'
                    value={authCont.user.email}
                    label='e-mail'
                  />
                )}
                {authCont.user && (
                  <EditSoloLine
                    title={'Password: '}
                    name='password'
                    label='password'
                  />
                )}
                {authCont.user && <PicUpload />}
              </Ul>
            </Col>
          </GradientContRadius>
        </Block>
      </Row>

      <Row>
        <DiagramStep
          title='Profile Infos'
          text='Profile information are public. You need to fill all fields to
                be able to interact and create references.'
        />

        <Block>
          <GradientContRadius>
            <Col>
              <Ul>
                {authCont.profile && (
                  <EditSoloLine
                    title={'Profile Name: '}
                    onChange={onChange}
                    value={authCont.profile.profileName}
                    name='profileName'
                    label='profile name'
                  />
                )}
                {authCont.profile && (
                  <EditTextArea
                    title={'Message: '}
                    placeholder={authCont.profile.profileMotto}
                    value={profileMotto}
                    name='profileMotto'
                    onChange={onChange}
                    label='profile motto'

                    // spellCheck='false'
                  />
                )}
                {authCont.profile && (
                  <EditTagItem
                    title={'Service Fields: '}
                    value={[userCont.tagArray]}
                    name='services'
                    onChange={onChange}
                    label='service fields'
                  />
                )}
              </Ul>
            </Col>
          </GradientContRadius>
        </Block>
      </Row>

      <Row>
        <DiagramStep
          title='Professional Infos'
          text='Membership information are public. You need to fill all fields to be able to post offers.'
        />

        <Block>
          <GradientContRadius>
            <Col>
              <Ul>
                {authCont.user && (
                  <EditSoloLine
                    title={'Location: '}
                    onChange={onChange}
                    value={authCont.profile.location}
                    name='location'
                    label='location'
                  />
                )}
                {authCont.user && (
                  <EditTextArea
                    title={'Detailed Description: '}
                    placeholder={authCont.profile.description}
                    value={description}
                    name='description'
                    onChange={onChange}
                    label='detailed description'
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
      </Row>

      <Row>
        <DiagramStep
          title='Works'
          text=' After you created at least one of each item your profile will
                reach the PRO level.'
        />

        <Block>
          <GradientContRadius>
            <Col>
              <Ul>
                <EditReadLine title='Offers' value='5'></EditReadLine>
                <EditReadLine title='References' value='7'></EditReadLine>
              </Ul>
            </Col>
          </GradientContRadius>
        </Block>
      </Row>
      <button type='submit' onClick={onSubmit}>
        SUBMIT
      </button>
    </Form>
  );
};

export default EditProfile;
