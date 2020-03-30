// Utilities
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

// Component

import ButtonCheck from '../../Utilities//ButtonCheck';

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
  width: 95%;
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

const EditTagItem = ({ title, onChange }) => {

const [tagArray, setTagArray] = useState([]);
const [checked, setChecked] = useState(false)


     const handleClick = e => {
       console.log(e.target)
       
     };

       



    useEffect(() => {
      // if (isAuthenticated) {
      //   props.history.push('/');
 console.log(tagArray);

      //eslint-disable-next-line
    }, [tagArray]);

  return (
    <Li>
      <H4>{title}</H4>
      <TagCont>
        {ServiceFieldArray &&
          ServiceFieldArray.map((field, i) => {
            if(field.checked)tagArray.push();

            return (
              <label key={i}>
                <ButtonCheck key={i} value={field} text={field} onClick={handleClick} onChange={onChange}  ></ButtonCheck>
              </label>
            );
          })}
      </TagCont>
    </Li>
  );

 console.log(tagArray);

};

export default EditTagItem;
