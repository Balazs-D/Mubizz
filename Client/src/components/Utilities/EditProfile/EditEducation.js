// Utilities
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

// Component

import InputMinimal from '../InputMinimal';
import ButtonCircle from '../ButtonCircle';
import ButtonLight from '../ButtonLight';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Styled Comp

const InputEdit = styled(InputMinimal)`
  padding: 5px;
  text-transform: italic;
  font-weight: lighter;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.info};

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
  height: 100%;
  margin: 20px;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  padding: 10px;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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

const Icon = styled.i`
  transition: all 0.3s ease-in;
`;

const AddButton = styled(ButtonLight).attrs({ type: 'button' })`
  position: absolute;
  transition: all 0.3s ease-in;
  bottom: 20%;
  right: 2%;
  background: white;

  &:hover {
    background: ${(props) => props.theme.colors.info};
    border: 1px solid ${(props) => props.theme.colors.mainPurple};
  }
`;

const SkillLi = styled.div.attrs({
  add: true,
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px;
  font-size: ${(props) => props.theme.fontSizes.xm};
  width: 100%;
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
  margin: 10px 0px;
  position: absolute;
  left: 4%;
  top: -23px;
  border: 1px solid ${(props) => props.theme.colors.info};
  background: white;
  padding: 1px 4px;
  border-radius: 3px;
`;

const EditEducation = ({ placeholder, label }) => {
  const [eduItem, setEduItem] = useState('');
  const [educationArray, setEducationArray] = useState([]);
  const authCont = useContext(AuthCont);

  useEffect(() => {
    setEducationArray(authCont.profile.education);
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (eduItem === '') {
      return null;
    } else {
      educationArray.push(eduItem);

      authCont.updateEducation(educationArray);
      setEduItem('');
    }
  };

  const deleteItem = (e) => {
    e.preventDefault();
    let itemInd = educationArray.indexOf(e.target.attributes['value'].value);
    educationArray.splice(itemInd, 1);
    setEducationArray(educationArray);
    authCont.updateEducation(educationArray);
  };

  // useEffect(() => {
  //   authCont.updateLanguage(languagesArray);
  // }, [languagesArray]);

  return (
    <Li>
      <Label>{label}</Label>

      <Row>
        <InputEdit
          placeholder={placeholder}
          value={eduItem}
          onChange={(e) => setEduItem(e.target.value)}
          type='text'
          name='input'
          placeholderFontSize='1px'
        ></InputEdit>
        <AddButton onClick={handleButtonClick} text='+' />
      </Row>

      <Col>
        {educationArray.map((listItem, i) => (
          <SkillLi value={listItem} key={i} index={i} onClick={deleteItem}>
            <p>{listItem}</p>
            <Icon key={i} className='far fa-trash-alt'></Icon>
          </SkillLi>
        ))}
      </Col>
    </Li>
  );
};

export default EditEducation;
