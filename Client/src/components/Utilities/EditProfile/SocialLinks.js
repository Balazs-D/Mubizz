// Utilities
import React, { useEffect, useState, useContext, Fragment } from 'react';
import styled from 'styled-components';

// Component

import InputMinimal from '../InputMinimal';
// import ButtonCircle from '../ButtonCircle';
import AddLineComponent from '../EditProfile/AddLineComponent';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Styled Comp

const InputEdit = styled(InputMinimal)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px;
  font-size: ${(props) => props.theme.fontSizes.xm};
  width: 55%;
  background: transparent;
  padding: 3px 6px;
  align-items: center;
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid
    ${(props) =>
      props.checked ? props.theme.colors.mainPurple : props.theme.colors.info};
  color: ${(props) => props.theme.colors.mainPurple};
`;

const ButtonC = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 15px;
  height: 15px;
  border-radius: 50%;
  /* font-size: 10px; */
  font-family: sans-serif;
  text-decoration: none;
  background: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.colors.mainPurple};
  color: ${(props) => props.theme.colors.mainPurple};
  text-align: center;
  position: absolute;
  top: 0px;
  transition: all 0.35s;
  z-index: 0;
  outline: none;

  &:hover {
    background: ${(props) => props.theme.colors.warning};
    border: ${(props) => props.theme.colors.mainPurple};

    color: ${(props) => props.theme.colors.primaryDark};
  }
  &:active {
    background: ${(props) => props.theme.colors.info};
    color: ${(props) => props.theme.colors.primaryDark};
  }
`;

const ConfButton = styled(InputEdit)`
  width: 10%;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
`;

const Li = styled.li`
  width: 95%;
    padding: 0px;
      margin: 20px;



  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 95%;
  margin: 20px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.info}; */
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  position: relative;
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.info};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const Icon = styled.i`
  transition: all 0.3s ease-in;
`;

const SkillLi = styled.div.attrs({
  add: true,
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px;
  font-size: ${(props) => props.theme.fontSizes.xm};
  width: 49%;
  background: ${(props) => props.theme.colors.white};
  padding: 3px 6px;
  align-items: center;
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid
    ${(props) =>
      props.checked ? props.theme.colors.mainPurple : props.theme.colors.info};
  color: ${(props) => props.theme.colors.mainPurple};

  &:hover {
    background: ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.white};
  }

  &:hover ${Icon} {
    color: ${(props) => props.theme.colors.white};
  }
`;

const H4 = styled.h4`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  width: 100%;
  margin-top: 10px;
`;

const SocialLinks = ({ placeholder, label }) => {
  const socialNames = [
    'youtube',
    'twitter',
    'facebook',
    'linkedin',
    'instagram',
    'discogs',
    'bandcamp',
    'soundcloud',
  ];

  const [linksArr, setLinksArr] = useState([
    {
      youtube: '',
    },
    {
      twitter: '',
    },
    {
      facebook: '',
    },
    {
      linkedin: '',
    },
    {
      instagram: '',
    },
    {
      discogs: '',
    },
    {
      bandcamp: '',
    },
    {
      soundcloud: '',
    },
  ]);
  const [link, setLink] = useState('');
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);

  const {
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    discogs,
    bandcamp,
    soundcloud,
  } = linksArr;

  console.log(linksArr);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setLinksArr({...linksArr, [e.target.name]: e.target.value });
    console.log(linksArr);
  };

  useEffect(() => {
    setLinksArr([...linksArr, authCont.profile.social[0]]);
  }, []);
  console.log(linksArr);

  useEffect(() => {
    userCont.updateSocial(linksArr);
  }, [linksArr]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (link === '') {
      return null;
    } else {
      linksArr.push(link);

      // setSkillsArray([...skillsArray, skill])
      userCont.updateSocial(linksArr);
      setLink('');
    }
  };

  const deleteItem = (e) => {
    e.preventDefault();
    console.log(linksArr);

    // let itemInd = e.target.attributes['index'].value;
    // skillsArray.splice(itemInd, 1);
    let itemInd = linksArr.indexOf(e.target.attributes['value'].value);
    linksArr.splice(itemInd, 1);
    setLinksArr(linksArr);
    userCont.updateSocial(linksArr);

    console.log(linksArr);
    console.log(e.target.attributes['value'].value);
    console.log(itemInd);
  };

  // useEffect(() => {
  //   // userCont.updateLanguageState(languagesArray);
  // }, [languagesArray]);

  return (
    <Li>
      <Cont>
        {socialNames.map((item, i) => (
          <Row key={i}>
            <P>{item}</P>
            <InputEdit
              placeholder={placeholder}
              value={item}
              onChange={(e) => setLink(e.target.value)}
              type='text'
              name={item}
              onChange={handleChange}
            ></InputEdit>
          </Row>
        ))}
      </Cont>
      <Label>{label}</Label>
      {/* <Col>
        {linksArr &&
          linksArr.map((link, i) => (
            <SkillLi value={link} key={i} index={i} onClick={deleteItem}>
              <p>{link.youtube}</p>
              <Icon key={i} className='far fa-trash-alt'></Icon>
            </SkillLi>
          ))}
      </Col> */}
    </Li>
  );
};

export default SocialLinks;
