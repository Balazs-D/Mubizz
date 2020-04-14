// Utilities
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

// Component

import InputMinimal from '../InputMinimal';
import ButtonCircle from '../ButtonCircle';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

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
  transition: all 0.3s ease-in;

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

const EditAddLine = ({ placeholder, label }) => {
  const [skill, setSkill] = useState('');
  const [skillsArray, setSkillsArray] = useState([]);
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);

  
// ! Child component gets AuthContext (Fetched Database) data:
  useEffect(() => {
    setSkillsArray(authCont.profile.skills);
  }, []);

  

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (skill === '') {
      return null;
    } else {
      skillsArray.push(skill);
      console.log(skillsArray)
      // setSkillsArray([...skillsArray, skill])
      authCont.updateSkills(skillsArray);
      console.log(skillsArray)
      setSkill('');
    }
  };

  const deleteItem = (e) => {
    e.preventDefault();

   
    let itemInd = skillsArray.indexOf(e.target.attributes['value'].value);
    skillsArray.splice(itemInd, 1);
    authCont.updateSkills(skillsArray);
  };

  // useEffect(() => {}, [skillsArray]);

  return (
    <Li>
      <Row>
        <InputEdit
          placeholder={placeholder}
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          type='text'
          name='input'
          placeholderFontSize='1px'
        ></InputEdit>
        <ButtonCircle onClick={handleButtonClick} />
      </Row>
      <Label>{label}</Label>

      <Col>
        {skillsArray.map((listItem, i) => (
          <SkillLi value={listItem} key={i} index={i} onClick={deleteItem}>
            <p>{listItem}</p>
            <Icon className='far fa-trash-alt'></Icon>
          </SkillLi>
        ))}
      </Col>
    </Li>
  );
};

export default EditAddLine;
