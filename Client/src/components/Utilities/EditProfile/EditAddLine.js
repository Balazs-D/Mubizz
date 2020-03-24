// Utilities
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

// Component

import InputMinimal from '../InputMinimal';
import ButtonCircle from '../ButtonCircle';

// Styled Comp

const InputEdit = styled(InputMinimal)`
  padding: 1px;

  width: 70%;
  &:focus {
    background: ${props => props.theme.colors.white};
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

const ItemDiv = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
margin-bottom: 10px;
`

const H4 = styled.h4`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const EditAddLine = ({ value, title }) => {
  let items = [];
  const [itemsCounter, setItemsCounter] = useState(1);

 const addOne = e => {
   e.preventDefault();
   setItemsCounter(itemsCounter + 1);

   console.log(itemsCounter, items);

   return itemsCounter;
 };

  for (let i = 0; i < itemsCounter; i++) {
    items.push(
      <ItemDiv key={i}>
        <InputEdit defaultValue='test' />
        <ButtonCircle
          icon={<i className='fas fa-plus'></i>}
          onClick={addOne}
        ></ButtonCircle>
      </ItemDiv>
    );
  };

   

  return (
    <Li>
      <H4>{title}</H4>
      
      {items}
    </Li>
  );
};

export default EditAddLine;
