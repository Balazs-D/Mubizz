// Utilities
import React, { useContext, useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';
import axios from 'axios';
// Component

import EditSoloLine from '../../Utilities/EditProfile/EditSoloLine';
import EditTextArea from '../../Utilities/EditProfile/EditTextArea';
import ReferenceCredits from '../../Utilities/References/ReferenceCredits';
import IntroText from '../../Utilities/IntroText';
import DiagramStep from '../../Utilities/EditProfile/DiagramStep';
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

const Form = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const OnlineRef = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
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

const Span = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-around;
`;

const SpanFull = styled.div`
  width: 87%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const ReferenceManagement = (props) => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);
  const [newRef, setNewRef] = useState(false);
  const [active, setActive] = useState(true);
  const [targetID, setTargetID] = useState();
  const [references, setReferences] = useState(authCont.reference);
console.log(references)
  const [position, setPosition] = useState('');
  const [projectName, setProjectName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState([]);
  const [credits, setCredits] = useState([
    { position: 'Dancer', url: 'www.mubiz.com/madonnassinger' },
  ]);

  console.log(position);
  console.log(projectName);
  console.log(location);
  console.log(description);

  console.log(links);
  console.log(credits);
  console.log(FormData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newItem = async () => {
    await setNewRef(!newRef);
    await window.scrollTo(0, 0);
  };

  const activeToggle = () => {
    setActive(!active);
  };

  // const onChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  //   console.log(e.target.name);
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('on submit');

    console.log('test 01');
    console.log(FormData);

    await authCont.addReference({
      // FormData
      position,
      projectName,
      location,
      description,
      links,
      credits,
    });

    props.history.push('/dashboard/reference-management');
    console.log(authCont.reference);
    await authCont.getProfile();
    setNewRef(false);
    await authCont.getReference();
    window.scrollTo(0, 0);
  };

  const deleteRef = async (e) => {
    e.persist();
    try {
      let itemId = e.target.value;
      console.log(itemId);

      const res = await axios.delete(
        `http://localhost:5000/api/reference/${itemId}`
      );

      // loadUser();
    } catch (err) {
      console.log('ERROR DELETE REF');
    }
    setNewRef(false);
    await authCont.getReference();
  };

  useEffect(() => {
    setReferences(authCont.reference);
  }, [authCont.reference]);

  return (
    <Col>
      <Form>
        <SiteName>Reference Manager</SiteName>

        <SpanFull>
          <IntroShortText stepNr={5}></IntroShortText>
          <ButtonNew
            onClick={newItem}
            value={newRef ? 'Cancel card' : 'Add a new reference'}
          ></ButtonNew>
        </SpanFull>

        {newRef && (
          <form onSubmit={onSubmit}>
            <Row>
              <DiagramStep title='References' nr={6} />

              <Block>
                <GradientContRadius>
                  <Col>
                    <Ul>
                      {authCont.user && (
                        <EditSoloLine
                          onChange={(e) => setPosition(e.target.value)}
                          value={position}
                          name='position'
                          label='position / title'
                        />
                      )}
                      {authCont.user && (
                        <EditSoloLine
                          onChange={(e) => setProjectName(e.target.value)}
                          value={projectName}
                          name='projectName'
                          label='project name'
                        />
                      )}
                      {authCont.user && (
                        <EditSoloLine
                          onChange={(e) => setLocation(e.target.value)}
                          value={location}
                          name='location'
                          label='location'
                        />
                      )}
                      {authCont.profile && (
                        <EditTextArea
                          placeholder={''}
                          value={description}
                          name='description'
                          onChange={(e) => setDescription(e.target.value)}
                          label='description'
                        />
                      )}

                      {/* {authCont.profile && (
                      <ReferenceCredits
                        placeholder={''}
                        value={credits}
                        name='credits'
                        onChange={(e) => setDescription(e.target.value)}
                        label='partners'
                      />
                    )} */}
                    </Ul>
                  </Col>
                </GradientContRadius>
              </Block>
            </Row>
          </form>
        )}
        {newRef && (
          <button type='submit' onClick={onSubmit}>
            SUBMIT
          </button>
        )}
      </Form>
      <SubName>Reference Cards</SubName>
      <Added>
        <ul style={{ display: 'flex', flexDirection: 'column-reverse' }}>
          {authCont.reference &&
            references.map((ref, i) => {
              return (
                <OnlineRef key={i}>
                  <p>{ref.projectName}</p>
                  <p>{ref.position}</p>

                  {/* <ButtonLight text='edit' />
                    <ButtonLight
                      text={active ? 'mute' : 'set'}
                      onClick={activeToggle}
                    /> */}
                  <ButtonLight
                    text='delete'
                    value={ref._id}
                    onClick={(e) => {
                      deleteRef(e);
                    }}
                  />
                </OnlineRef>
              );
            })}
        </ul>
      </Added>
    </Col>
  );
};

export default ReferenceManagement;
