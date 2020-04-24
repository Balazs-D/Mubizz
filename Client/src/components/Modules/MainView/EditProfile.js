// Utilities
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Component

import EditSoloLine from '../../Utilities/EditProfile/EditSoloLine';
import EditTextArea from '../../Utilities/EditProfile/EditTextArea';
import EditEducation from '../../Utilities/EditProfile/EditEducation';
import EditTagItem from '../../Utilities/EditProfile/EditTagItem';
import EditReadLine from '../../Utilities/EditProfile/EditReadLine';
import EditAddLine from '../../Utilities/EditProfile/EditAddLine';
import EditLocation from '../../Utilities/EditProfile/Location';

import PicUpload from '../../Utilities/PicUpload/PicUpload';
import ButtonSubmit from '../../Utilities/ButtonSubmit';
import IntroText from '../../Utilities/IntroText';
import DiagramStep from '../../Utilities/EditProfile/DiagramStep';
import EditLanguage from '../../Utilities/EditProfile/EditLanguage';
import SocialLinks from '../../Utilities/EditProfile/SocialLinks';
import Delete from '../../Utilities/EditProfile/Delete';

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
  display: flex;
  align-items: center;
  flex-direction: column;
  /* /* display: contents; */
  position: relative;
  z-index: 1;
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

const EditProfile = (props) => {
  const authCont = useContext(AuthCont);
  const [edited, setEdited] = useState(false);

  const [member, setMember] = useState(false);
  const [creator, setCreator] = useState(false);
  const [pro, setPro] = useState(false);

  const [profileName, setProfileName] = useState(authCont.profile.profileName);
  const [avatar, setAvatar] = useState(authCont.profile.avatar);
  const [profileMotto, setProfileMotto] = useState(
    authCont.profile.profileMotto
  );
  const [description, setDescription] = useState(authCont.profile.description);
  const [services, setServices] = useState(authCont.profile.services);
  const [website, setWebsite] = useState(authCont.profile.website);
  const [location, setLocation] = useState(authCont.profile.location);
  const [languages, setLanguages] = useState([authCont.profile.languages]);
  const [education, setEducation] = useState(authCont.profile.languages);
  const [skills, setSkills] = useState([authCont.profile.skills]);
  const [reference, setReferenece] = useState([]);
  const [youtube, setYoutube] = useState();
  const [twitter, setTwitter] = useState(authCont.profile.twitter);
  const [facebook, setFacebook] = useState(authCont.profile.facebook);
  const [linkedin, setLinkedin] = useState(authCont.profile.linkedin);
  const [instagram, setInstagram] = useState(authCont.profile.instagram);
  const [discogs, setDiscogs] = useState(authCont.profile.discogs);
  const [bandcamp, setBandcamp] = useState(authCont.profile.bandcamp);
  const [soundcloud, setSoundcloud] = useState(authCont.profile.soundcloud);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('on submit');

    console.log(FormData);
    await authCont.update({
      // FormData
      profileName,
      avatar,
      profileMotto,
      description,
      services,
      website,
      location,
      languages,
      education,
      skills,
      reference,
      youtube,
      twitter,
      facebook,
      linkedin,
      instagram,
      discogs,
      bandcamp,
      soundcloud,
      offers,
    });

    props.history.push('/dashboard/edit-profile');
    console.log('on submit get profile ');
    console.log(authCont);
    await authCont.getProfile();
    setEdited(false);

    window.scrollTo(0, 0);
  };

  

  console.log(authCont);
  console.log(profileName);
  console.log(avatar);
  console.log(profileMotto);
  console.log(description);
  console.log(services);
  console.log(website);
  console.log(location);
  console.log(languages);
  console.log(education);
  console.log(skills);
  console.log(reference);
  console.log(youtube);
  console.log(twitter);
  console.log(facebook);
  console.log(linkedin);
  console.log(instagram);
  console.log(discogs);
  console.log(bandcamp);
  console.log(soundcloud);
  console.log(offers);

  console.log(authCont.social);
  console.log(authCont.social.youtube);

  useEffect(() => {
    setSkills(authCont.profile.skills);
  }, [authCont.profile.skills]);

  useEffect(() => {
    setLanguages(authCont.profile.languages);
  }, [authCont.profile.languages]);

   useEffect(() => {
     setEducation(authCont.profile.education);
   }, [authCont.profile.education]);

    useEffect(() => {
      setLocation(authCont.profile.location);
    }, [authCont.profile.location]);

  useEffect(() => {
    setServices(authCont.profile.services);
  }, [authCont.profile.services]);

  useEffect(() => {
    setAvatar(authCont.profile.avatar);
  }, [authCont.profile.avatar]);

  useEffect(() => {
    setYoutube(authCont.social.youtube);
  }, [authCont.social.youtube]);

  useEffect(() => {
    setTwitter(authCont.social.twitter);
  }, [authCont.social.twitter]);

  useEffect(() => {
    setFacebook(authCont.social.facebook);
  }, [authCont.social.facebook]);

  useEffect(() => {
    setLinkedin(authCont.social.linkedin);
  }, [authCont.social.linkedin]);

  useEffect(() => {
    setInstagram(authCont.social.instagram);
  }, [authCont.social.instagram]);

  useEffect(() => {
    setDiscogs(authCont.social.discogs);
  }, [authCont.social.discogs]);

  useEffect(() => {
    setBandcamp(authCont.social.bandcamp);
  }, [authCont.social.bandcamp]);

  useEffect(() => {
    setSoundcloud(authCont.social.soundcloud);
  }, [authCont.social.soundcloud]);

  // If schema is done then map through schema use each info section
  // Then map through the info section and insert option to each section
  return (
    <Form onSubmit={onSubmit} onChange={(e) => setEdited(true)}>
      <SiteName>Edit Profile</SiteName>
      {edited && (
        <ButtonSubmit type='submit' text='Submit' onClick={onSubmit} />
      )}

      <IntroText stepNr={0} />
      <Row>
        <DiagramStep title='Basic User Infos' nr={1} />

        <Block>
          {/* <Title>Basic User Infos</Title> */}
          <GradientContRadius>
            <Col>
              <Ul>
                {authCont.user && (
                  <EditSoloLine
                    // onChange={(e) => setLink(e.target.value)}
                    value={authCont.user.name}
                    name='name'
                    label='name'
                  />
                )}
                {authCont.user && (
                  <EditSoloLine
                    // value={email}
                    name='email'
                    value={authCont.user.email}
                    label='e-mail'
                  />
                )}
                {/* {authCont.user && (
                  <EditSoloLine name='password' label='password' />
                )} */}
                {authCont.user && <PicUpload text='profile image' />}
              </Ul>
            </Col>
          </GradientContRadius>
        </Block>
      </Row>

      <Row>
        <DiagramStep title='Profile Infos' nr={2} />

        <Block>
          <GradientContRadius>
            <Col>
              <Ul>
                {authCont.profile && (
                  <EditSoloLine
                    onChange={(e) => setProfileName(e.target.value)}
                    value={authCont.profile.profileName}
                    name='profileName'
                    label='profile name'
                  />
                )}
                {authCont.profile && (
                  <EditTextArea
                    placeholder={authCont.profile.profileMotto}
                    value={profileMotto}
                    name='profileMotto'
                    onChange={(e) => setProfileMotto(e.target.value)}
                    label='profile motto'
                    maxlength='160'

                    // spellCheck='false'
                  />
                )}
                {authCont.profile && (
                  <EditTagItem
                    value={authCont.services}
                    name='services'
                    // onChange={onChange}
                    label='service fields'
                  />
                )}
              </Ul>
            </Col>
          </GradientContRadius>
        </Block>
      </Row>

      <Row>
        <DiagramStep title='Professional Infos' nr={3} />

        <Block>
          <GradientContRadius>
            <Col>
              <Ul>
                {
                  authCont.user && (
                    <EditLocation
                      value={authCont.profile.location}
                      name='location'
                      label='location'
                    />
                  )
                  //  <EditSoloLine
                  //   onChange={(e) => setLocation(e.target.value)}

                  // />
                }
                {authCont.user && (
                  <EditTextArea
                    placeholder={authCont.profile.description}
                    value={description}
                    name='description'
                    onChange={(e) => setDescription(e.target.value)}
                    label='detailed description'
                    maxLength='1000'
                  />
                )}
                {authCont.user && (
                  <EditAddLine
                    value={authCont.profile.skills}
                    name='skills'
                    label='skills & technologies'
                  />
                )}

                {authCont.user && (
                  <EditEducation
                    value={authCont.profile.education}
                    name='education'
                    label='education & certificates'
                  />
                )}

                {authCont.user && (
                  <EditLanguage
                    value={authCont.profile.languages}
                    name='languages'
                    label='languages'
                  />
                )}

                {authCont.user && (
                  <EditSoloLine
                    onChange={(e) => setWebsite(e.target.value)}
                    value={authCont.profile.website}
                    name='website'
                    label='web page'
                  />
                )}

                {authCont.user && (
                  <SocialLinks
                    // onChange={onChange}
                    value={authCont.profile.social}
                    name='social'
                    label='social media'
                    onChange={(e) => ({ [e.target.name]: e.target.value })}
                  />
                )}
              </Ul>
            </Col>
          </GradientContRadius>
        </Block>
      </Row>

      {/* <Row>
        <DiagramStep title='Works' nr={4} />

        <Block>
          <GradientContRadius>
            <Col>
              <Ul>
                <EditReadLine
                  title='Offers'
                  value={authCont.offer.length}
                ></EditReadLine>
                <EditReadLine
                  title='References'
                  value={authCont.reference.length}
                ></EditReadLine>
              </Ul>
            </Col>
          </GradientContRadius>
        </Block>
      </Row> */}

      <Row>
        <Ul>
          <Delete label='Delete Profile' />
        </Ul>
      </Row>
    </Form>
  );
};

export default EditProfile;
