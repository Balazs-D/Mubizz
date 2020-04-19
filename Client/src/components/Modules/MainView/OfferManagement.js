// Utilities
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Component

import EditSoloLine from '../../Utilities/EditProfile/EditSoloLine';
import EditTextArea from '../../Utilities/EditProfile/EditTextArea';

import IntroText from '../../Utilities/IntroText';
import DiagramStep from '../../Utilities/EditProfile/DiagramStep';
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

const SiteName = styled.h2`
  color: white;
  background: ${(props) => props.theme.colors.basicBlue};
  font-family: ${(props) => props.theme.fontFamily[5]};
  padding: 5px 10px;

  width: 100%;
`;

const Span = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-around;
`;


const SpanFull = styled.div`
  width: 87%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const ButtonNew = styled.input.attrs({ type: 'button' })`
  width: 25%;
  height: 70px;
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


const SubName = styled(SiteName)`
  width: 87%;
  background: ${(props) => props.theme.colors.primaryLight};
  box-shadow: 0px 0px 3px ${(props) => props.theme.colors.primaryDark};
  font-size: ${(props) => props.theme.fontSizes.half};
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

const IntroShortText = styled(IntroText)`
 width: 47%;
  margin: 0px 0px 0px 0px;
  height: 100%;
  color: ${(props) => props.theme.colors.basicBlue};
  /* background-image:radial-gradient(${(props) =>
    props.theme.colors.infoLight}, ${(props) => props.theme.colors.info} ); */
  border-radius: 3px;
  padding: 20px;
  text-align: justify;
  font-size: ${(props) => props.theme.fontSizes.half};
  font-family: ${(props) => props.theme.fontFamily[4]};
  position: relative;
  /* box-shadow: 0px 0px 2px ${(props) =>
    props.theme.colors.secondaryDecent}; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* border: 1px solid ${(props) => props.theme.colors.mainPurple}; */
   background: ${(props) => props.theme.colors.primaryLight};
  box-shadow: 0px 0px 3px ${(props) => props.theme.colors.primaryDark};`;

  const Added = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 87%;
    height: 100%;
    margin: 20px;
  `;

const OfferManagement = (props) => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);
  const [newOff, setNewOff] = useState(false);

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

  const newItem = async () => {
    await setNewOff(!newOff);
    await window.scrollTo(0, 0);
  };

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
    <Col>
      <Form onSubmit={onSubmit}>
        <SiteName>Offer Manager</SiteName>

        <SpanFull>
          <IntroShortText stepNr={5}></IntroShortText>
          <ButtonNew
            onClick={newItem}
            value={newOff ? 'Cancel card' : 'Add a new offer'}
          ></ButtonNew>
        </SpanFull>

        {newOff && (
          <Row>
            <DiagramStep title='Service Offer' nr={6} />

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
        )}
        {newOff && (
          <button type='submit' onClick={onSubmit}>
            SUBMIT
          </button>
        )}
      </Form>
      <SubName>Service Offer Cards</SubName>
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

export default OfferManagement;
