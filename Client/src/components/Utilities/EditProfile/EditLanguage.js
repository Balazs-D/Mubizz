// Utilities
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

// Component

import InputMinimal from '../InputMinimal';
import ButtonCircle from '../ButtonCircle';
import AddLineComponent from '../EditProfile/AddLineComponent';
import UserCont from '../../../context/user/userContext';

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

const EditLanguage = ({  placeholder, label }) => {
  const [language, setLanguage] = useState('');
  const userCont = useContext(UserCont);

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log('onClick state: ' + userCont.languages);

    userCont.updateLanguageState([...userCont.languages, language]);
    // setTodoList([...todoList, todo]);
    console.log('onClick: ' + language);
    console.log('onClick state: ' + userCont.languages);

    setLanguage('');

    return language;
  };

  const deleteItem = (e) => {
    e.preventDefault();
    let itemInd = e.target.attributes['index'].value;
    userCont.languages.splice(itemInd, 1);
    console.log(e.target.languages['index'].value);
    console.log(userCont.languages);
  };

  useEffect(() => {
    console.log('re render Languages Comp');
  }, [userCont.languages]);

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
        {userCont.languages &&
          userCont.languages.map((listItem, i) => (
            <SkillLi key={i}>
              <p>{listItem}</p>
              <i
                index={i}
                className='far fa-trash-alt'
                onClick={deleteItem}
              ></i>
            </SkillLi>
          ))}
      </Col>
    </Li>
  );
};

export default EditLanguage;
