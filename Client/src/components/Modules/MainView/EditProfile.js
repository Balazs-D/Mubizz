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
import SocialLinks from '../../Utilities/EditProfile/SocialLinks';

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

const EditProfile = (props) => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);

  // const [profile, setProfile] = useState({
  //   // email: `${authCont.user.email}`,
  //   profileName: `${authCont.profile.profileName}`,
  //   avatar: `${authCont.profile.avatar}`,
  //   profileMotto: `${authCont.profile.profileMotto}`,
  //   description: `${authCont.profile.description}`,
  //   services: [`${authCont.profile.services}`],
  //   website: `${authCont.profile.website}`,
  //   location: `${authCont.profile.location}`,
  //   languages: [`${authCont.profile.languages}`],
  //   skills: [`${authCont.profile.skills}`],
  //   reference: [],
  //   youtube: `${userCont.social.youtube}`,
  //   twitter: `${userCont.social.twitter}`,
  //   facebook: `${userCont.social.facebook}`,
  //   linkedin: `${userCont.social.linkedin}`,
  //   instagram: `${userCont.social.instagram}`,
  //   discogs: `${userCont.social.discogs}`,
  //   bandcamp: `${userCont.social.bandcamp}`,
  //   soundcloud: `${userCont.social.soundcloud}`,
  //   offers: {},
  // });

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
  const [skills, setSkills] = useState([authCont.profile.skills]);
  const [reference, setReferenece] = useState([]);
  const [youtube, setYoutube] = useState();
  const [twitter, setTwitter] = useState(authCont.profile.social.twitter);
  const [facebook, setFacebook] = useState(authCont.profile.social.facebook);
  const [linkedin, setLinkedin] = useState(authCont.profile.social.linkedin);
  const [instagram, setInstagram] = useState(authCont.profile.social.instagram);
  const [discogs, setDiscogs] = useState(authCont.profile.social.discogs);
  const [bandcamp, setBandcamp] = useState(authCont.profile.social.bandcamp);
  const [soundcloud, setSoundcloud] = useState(
    authCont.profile.social.soundcloud
  );
  const [offers, setOffers] = useState([]);

  // console.log(profile);
  // const {
  //   email,
  //   profileName,
  //   avatar,
  //   profileMotto,
  //   description,
  //   services,
  //   website,
  //   location,
  //   languages,
  //   skills,
  //   reference,
  //   youtube,
  //   twitter,
  //   facebook,
  //   linkedin,
  //   instagram,
  //   discogs,
  //   bandcamp,
  //   soundcloud,
  //   offers,
  // } = profile;

  useEffect(() => {
    window.scrollTo(0, 0);
    // setUser({ ...user, languages: '' });
    // setUser({ ...user, selectedSkills: '' });
    // setUser({ ...user, selectedTags: '' });
    // authCont.getProfile();
  }, []);

  // const onChange = (e) => {
  //   setProfile({ ...profile, [e.target.name]: e.target.value });
  //   console.log(e.target.name);
  // };

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

  useEffect(() => {
    setSkills(authCont.profile.skills);
  }, [authCont.profile.skills]);

  useEffect(() => {
    setLanguages(authCont.profile.languages );
  }, [authCont.profile.languages]);

  useEffect(() => {
    setServices(authCont.profile.services );
  }, [authCont.profile.services]);

  useEffect(() => {
    setAvatar(authCont.profile.avatar);
  }, [authCont.profile.avatar]);

  useEffect(() => {
    setYoutube(authCont.profile.social.youtube);
  }, [authCont.profile.social.youtube]);

  useEffect(() => {
    setTwitter(authCont.profile.social.twitter);
  }, [authCont.profile.social.twitter]);

  useEffect(() => {
    setFacebook(authCont.profile.social.facebook);
  }, [authCont.profile.social.facebook]);

  useEffect(() => {
    setLinkedin(authCont.profile.social.linkedin);
  }, [authCont.profile.social.linkedin]);

  useEffect(() => {
    setInstagram(authCont.profile.social.instagram);
  }, [authCont.profile.social.instagram]);

  useEffect(() => {
    setDiscogs(authCont.profile.social.discogs);
  }, [authCont.profile.social.discogs]);

  useEffect(() => {
    setBandcamp(authCont.profile.social.bandcamp);
  }, [authCont.profile.social.bandcamp]);

  useEffect(() => {
    setSoundcloud(authCont.profile.social.soundcloud);
  }, [authCont.profile.social.soundcloud]);

  // useEffect(() => {
  //   setSocial({
  //     ...profile,
  //     youtube: userCont.social.youtube,
  //     twitter: userCont.social.twitter,
  //     facebook: userCont.social.facebook,
  //     linkedin: userCont.social.linkedin,
  //     instagram: userCont.social.instagram,
  //     discogs: userCont.social.discogs,
  //     bandcamp: userCont.social.bandcamp,
  //     soundcloud: userCont.social.soundcloud,
  //   });
  // }, [authCont.profile.social]);

  // useEffect(() => {
  //   setProfile({ ...profile, skills: authCont.profile.skills });
  // }, [authCont.profile]);

  // useEffect(() => {
  //   setProfile({ ...profile, languages: authCont.profile.languages });
  // }, [authCont.profile]);

  // useEffect(() => {
  //   setProfile({ ...profile, services: authCont.profile.services });
  // }, [authCont.profile]);

  // useEffect(() => {
  //   setProfile({ ...profile, avatar: userCont.avatar });
  // }, [authCont.profile.avatar]);

  // useEffect(() => {
  //   setProfile({
  //     ...profile,
  //     youtube: userCont.social.youtube,
  //     twitter: userCont.social.twitter,
  //     facebook: userCont.social.facebook,
  //     linkedin: userCont.social.linkedin,
  //     instagram: userCont.social.instagram,
  //     discogs: userCont.social.discogs,
  //     bandcamp: userCont.social.bandcamp,
  //     soundcloud: userCont.social.soundcloud,
  //   });
  // }, [authCont.profile.social]);

  // If schema is done then map through schema use each info section
  // Then map through the info section and insert option to each section
  return (
    <Form onSubmit={onSubmit}>
      <SiteName>Edit Profile</SiteName>

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
                {authCont.user && (
                  <EditSoloLine name='password' label='password' />
                )}
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
                {authCont.user && (
                  <EditSoloLine
                    onChange={(e) => setLocation(e.target.value)}
                    value={authCont.profile.location}
                    name='location'
                    label='location'
                  />
                )}
                {authCont.user && (
                  <EditTextArea
                    placeholder={authCont.profile.description}
                    value={description}
                    name='description'
                    onChange={(e) => setDescription(e.target.value)}
                    label='detailed description'
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
                  />
                )}
              </Ul>
            </Col>
          </GradientContRadius>
        </Block>
      </Row>

      <Row>
        <DiagramStep title='Works' nr={4} />

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
