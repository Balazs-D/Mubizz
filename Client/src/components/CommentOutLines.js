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

// const onChange = (e) => {
//   setProfile({ ...profile, [e.target.name]: e.target.value });
//   console.log(e.target.name);
// };

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
