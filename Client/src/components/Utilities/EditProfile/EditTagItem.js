// Utilities
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';


// Component

import ButtonCheck from '../../Utilities//ButtonCheck';
import UserCont from '../../../context/user/userContext';
// Styled Comp

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 20px;
`;

const H4 = styled.h4`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const TagCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  padding: 10px;
  border: 1px solid ${props=>props.theme.colors.info};
  border-radius: 4px;
  background: ${props=>props.theme.colors.white};
`;

const Label = styled.label`
  color: ${props => props.theme.colors.mainPurple};
  font-size: ${props => props.theme.fontSizes.small};
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
  'Volunteer'
];

const EditTagItem = ({ title, onChange, label }) => {

const userCont = useContext(UserCont);


     const handleClick = e => {
       console.log(e.target.value)
       
     };

       



    useEffect(() => {
      // if (isAuthenticated) {
      //   props.history.push('/');
 console.log(userCont.selectedTags);

      //eslint-disable-next-line
    }, [userCont.selectedTags]);

  return (
    <Li>
      <H4>{title}</H4>
      <TagCont>
        {ServiceFieldArray &&
          ServiceFieldArray.map((field, i) => {
            return (
              <label key={i}>
                <ButtonCheck
                  key={i}
                  value={field}
                  text={field}
                  onClick={handleClick}
                  onChange={onChange}
                ></ButtonCheck>
              </label>
            );
          })}
      </TagCont>
      <Label>{label}</Label>
    </Li>
  );


};

export default EditTagItem;
