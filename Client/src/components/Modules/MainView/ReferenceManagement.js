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
import ProcessDiagram from '../../Utilities/EditProfile/ProcessDiagram';
import IntroText from '../../Utilities/IntroText';
import DiagramStep from '../../Utilities/EditProfile/DiagramStep';
import EditLanguage from '../../Utilities/EditProfile/EditLanguage';
import CardRadius from '../../Utilities/CardRadius';
import ButtonLight from '../../Utilities/ButtonLight';
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

const Added = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 87%;
  height: 100%;
  margin: 20px;
`;

const Form = styled.form`
  display: contents;
  flex-direction: column;
  justify-content: center;
  padding: 0;
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

const IntroShortText = styled(IntroText)`
width: 10px`

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
  padding: 0px 0px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  background: white;
  justify-content: center;
  padding: 00px 0px;

  flex-direction: row;
`;

const OnlineRef = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  font-family: ${(props) => props.theme.fontFamily[5]};
`;

const SiteName = styled.h2`
  color: white;
  background: ${(props) => props.theme.colors.basicBlue};
  font-family: ${(props) => props.theme.fontFamily[5]};
  padding: 5px 10px;

  width: 100%;
`;

const SubName = styled(SiteName)`
  width: 87%;
  background: ${(props) => props.theme.colors.primaryLight};
  box-shadow: 0px 0px 3px ${(props) => props.theme.colors.primaryDark};
  font-size: ${(props) => props.theme.fontSizes.half};
`;

const ButtonNew = styled.input.attrs({ type: 'button' })`
  width: 40%;
  height: 50px;
  padding: 0px;
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  border-radius: 3px;
  font-family: ${(props) => props.theme.fontFamily[5]};
  font-size: ${(props) => props.theme.fontSizes.small};
  background: ${(props) => props.theme.colors.info};
  color: ${(props) => props.theme.colors.mainPurple};
  margin: 30px 0px 40px 0px;
  transition: all 0.35s ease-in;
  box-shadow: 0px 0px 0px ${(props) => props.theme.colors.white};
  text-align: center;

  &:hover {
    font-size: ${(props) => props.theme.fontSizes.small};
    background: ${(props) => props.theme.colors.gradientPink};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    box-shadow: -1px -1px 3px ${(props) => props.theme.colors.mainPurple},
      inset -1px -1px 3px ${(props) => props.theme.colors.mainPurple};
  }
`;

const Span = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-around
`;

const SpanFull = styled(Span)`
  width: 100%;
  justify-content: space-between;
  background: red;
`;

const ReferenceManagement = (props) => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);
  const [newRef, setNewRef] = useState(false);

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
  }, []);

  const newItem = async () => {
    await setNewRef(!newRef);
    await window.scrollTo(0, 0);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('on submit');

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
    <Col>
      <Form onSubmit={onSubmit}>
        <SiteName>Reference Manager</SiteName>

       
          <IntroShortText stepNr={5} ></IntroShortText>
          <ButtonNew
            onClick={newItem}
            value={newRef ? 'Cancel card' : 'Add a new reference card'}
          ></ButtonNew>
        

        {newRef && (
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
                        name='position'
                        label='position / title'
                      />
                    )}
                    {authCont.user && (
                      <EditSoloLine
                        // onChange={(e) => setLink(e.target.value)}
                        value={''}
                        name='projectName'
                        label='project name'
                      />
                    )}
                    {authCont.user && (
                      <EditSoloLine
                        // onChange={(e) => setLink(e.target.value)}
                        value={''}
                        name='location'
                        label='location'
                      />
                    )}
                    {authCont.profile && (
                      <EditTextArea
                        placeholder={''}
                        value={''}
                        name='description'
                        // onChange={(e) => setProfileMotto(e.target.value)}
                        label='description'
                      />
                    )}
                  </Ul>
                </Col>
              </GradientContRadius>
            </Block>
          </Row>
        )}
        {newRef && (
          <button type='submit' onClick={onSubmit}>
            SUBMIT
          </button>
        )}
      </Form>
      <SubName>Reference Cards</SubName>
      <Added>
        <ul>
          <OnlineRef>
            <p>Project Name</p>
            <Span>
              <ButtonLight text='edit' />
              <ButtonLight text='delete' />
            </Span>
          </OnlineRef>
        </ul>
      </Added>
    </Col>
  );
};

export default ReferenceManagement;