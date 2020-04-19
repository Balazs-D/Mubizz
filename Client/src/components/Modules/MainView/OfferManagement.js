// Utilities
import React, { useContext, useState, useEffect } from 'react';
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
import ProcessDiagram from '../../Utilities/EditProfile/ProcessDiagram';
import IntroText from '../../Utilities/IntroText';
import DiagramStep from '../../Utilities/EditProfile/DiagramStep';
import EditLanguage from '../../Utilities/EditProfile/EditLanguage';

// Styled Comp

const GradientContRadius = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.mainPurple},
    ${(props) => props.theme.colors.mainPurple}
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

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  width: 90%;
  padding: 0px 20px;
  margin-top: 30px;
  font-weight: 200;
  font-family: ${(props) => props.theme.fontFamily[5]};
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  width: 100%;
  height: 100%;
  margin-top: 0px;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.white},
    ${(props) => props.theme.colors.white}
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

const SiteName = styled.h2`
  color: white;
  background: ${(props) => props.theme.colors.basicBlue};
  font-family: ${(props) => props.theme.fontFamily[5]};
  padding: 5px 10px;

  width: 100%;
`;

const OfferManagement = (props) => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);

  const [user, setUser] = useState({
    // email: `${authCont.user.email}`,
    // profileName: `${authCont.profile.profileName}`,
    // avatar: `${authCont.profile.avatar}`,
    // profileMotto: `${authCont.profile.profileMotto}`,
    // description: `${authCont.profile.description}`,
    // services: `${userCont.selectedTags}`,
    // website: `${authCont.profile.website}`,
    // location: `${authCont.profile.location}`,
    // languages: `${userCont.languages}`,
    // skills: `${userCont.selectedSkills}`,
    // reference: [],
    // social: {},
    // offers: {},
  });

  const {
    // email,
    // profileName,
    // avatar,
    // profileMotto,
    // description,
    // services,
    // website,
    // location,
    // languages,
    // skills,
    // reference,
    // social,
    // offers,
  } = user;

  useEffect(() => {
    window.scrollTo(0, 0);
    // setUser({ ...user, languages: '' });
    // setUser({ ...user, selectedSkills: '' });
    // setUser({ ...user, selectedTags: '' });
    // console.log('USe Effect get profile ');
    // authCont.getProfile();
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  const onSubmit = async (e) => {
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
      // email,
      // profileName,
      // avatar,
      // profileMotto,
      // description,
      // services,
      // website,
      // location,
      // languages,
      // skills,
      // reference,
      // social,
      // offers,
    });

    props.history.push('/dashboard');
    console.log(authCont);
    await authCont.getProfile();
    window.scrollTo(0, 0);
  };

  return (
    <Form onSubmit={onSubmit}>
      <SiteName>Offer Manager</SiteName>

      <IntroText stepNr={5} />

      <Row>
        <DiagramStep title='References' nr={6} />

        <Block>
          <GradientContRadius>
            <Col>
              <Ul>
                {authCont.user && (
                  <EditSoloLine
                    // onChange={(e) => setLink(e.target.value)}
                    value={''}
                    name='title'
                    label='offer name'
                  />
                )}
                {authCont.profile && (
                  <EditTextArea
                    placeholder={''}
                    value={''}
                    name='description'
                    // onChange={(e) => setProfileMotto(e.target.value)}
                    label='offer description'
                  />
                )}
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

export default OfferManagement;
