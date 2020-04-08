// Utilities
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

// Component

import InputMinimal from '../InputMinimal';
import ButtonCircle from '../ButtonCircle';
import AddLineComponent from '../EditProfile/AddLineComponent';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';
import { SET_ALERT } from '../../../context/types';

// Styled Comp

const InputEdit = styled(InputMinimal)`
  padding: 1px;
  text-transform: italic;
  font-weight: lighter;
  width: 85%;
  &:focus {
    background: ${(props) => props.theme.colors.white};
    text-transform: normal;
    font-weight: bold;
  }
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 95%;
  margin: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
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
`;

const EditLanguage = ({ placeholder, label }) => {
  const [language, setLanguage] = useState('');
  const [languagesArray, setLanguagesArray] = useState([]);
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);

  useEffect(() => {
    setLanguagesArray(authCont.profile.languages);
  }, []);

  useEffect(() => {
    userCont.updateLanguageState(languagesArray);
  }, [languagesArray]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (language === '') {
      return null;
    } else {
      languagesArray.push(language);

      // setSkillsArray([...skillsArray, skill])
      userCont.updateLanguageState(languagesArray);
      setLanguage('');
    }
  };

  console.log('Lang Local Array: ' + languagesArray);
  console.log('Lang UserCont Array: ' + userCont.languages);
  console.log('Lang AuthCont Array: ' + authCont.profile.languages);

  const deleteItem = (e) => {
    e.preventDefault();
    console.log(languagesArray);

    // let itemInd = e.target.attributes['index'].value;
    // skillsArray.splice(itemInd, 1);
    let itemInd = languagesArray.indexOf(e.target.attributes['value'].value);
    languagesArray.splice(itemInd, 1);
    setLanguagesArray(languagesArray);
    userCont.updateLanguageState(languagesArray);

    console.log(languagesArray);
    console.log(e.target.attributes['value'].value);
    console.log(itemInd);
  };

  // useEffect(() => {
  //   // userCont.updateLanguageState(languagesArray);
  // }, [languagesArray]);

  return (
    <Li>
      <Row>
        <InputEdit
          placeholder={placeholder}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          type='text'
          name='input'
          placeholderFontSize='1px'
        ></InputEdit>
        <ButtonCircle onClick={handleButtonClick} />
      </Row>
      <Label>{label}</Label>

      <Col>
        {languagesArray.map(
          (listItem, i) =>
            
              <SkillLi value={listItem} key={i} index={i} onClick={deleteItem}>
                <p>{listItem}</p>
                <Icon key={i} className='far fa-trash-alt'></Icon>
              </SkillLi>
            
        )}
      </Col>
    </Li>
  );
};

export default EditLanguage;
