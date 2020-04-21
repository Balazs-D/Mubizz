// Utilities
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

// Component

import ButtonTag from '../../Utilities//ButtonTag';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Styled Comp

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 20px;
  position: relative;
`;

const H4 = styled.h4`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const TagCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 95%;
  padding: 35px 16px 10px 16px;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white};
  position: relative;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 10px 0px;
  position: absolute;
  left: 4%;
  top: -10%;
  border: 1px solid ${(props) => props.theme.colors.info};
  background: white;
  padding: 1px 4px;
  border-radius: 3px;
`;

const ServiceFieldArray = [
  'Sound Technician',
  'Sound Engineer',
  'Singer',
  'Musician',
  'Performance',
  'Studio',
  'Live',
  'Broadcasting',
  'Promotion',
  'Management',
  'Volunteer',
];

const EditTagItem = ({ title, onChange, label }) => {
  const authCont = useContext(AuthCont);

  const [tagArr, setTagArr] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  useEffect(() => {
    setTagArr(authCont.profile.services);
  }, [0]);

  const toggleClick = (e) => {
    e.preventDefault();
    if (tagArr.includes(e.target.value)) {
      let index = tagArr.indexOf(e.target.value);
      tagArr.splice(index, 1);
      setIsChecked(false);
    } else {
      tagArr.push(e.target.value);
      setIsChecked(true);
    }
    console.log(tagArr);
    console.log(e.target.value);
    const update = tagArr.filter((item) => item !== '');

    setTagArr(update);
    console.log(e.target.checked);
    authCont.updateServices(tagArr);
    console.log(update);
  };

  return (
    <Li>
      <TagCont>
        <Label>{label}</Label>
        {ServiceFieldArray.map((field, i) => {
          return (
            <ButtonTag
              key={i}
              value={field}
              text={field}
              onClick={toggleClick}
              checked={tagArr.includes(field) ? true : false}
            ></ButtonTag>
          );
        })}
      </TagCont>
    </Li>
  );
};

export default EditTagItem;
