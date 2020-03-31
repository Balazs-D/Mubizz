// Utilities
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

// Component

import InputMinimal from '../InputMinimal';
import ButtonCircle from '../ButtonCircle';
import AddLineComponent from '../EditProfile/AddLineComponent';

// Styled Comp

const InputEdit = styled(InputMinimal)`
  padding: 1px;
  text-transform: italic;
  font-weight: lighter;
  width: 80%;
  &:focus {
    background: ${props => props.theme.colors.white};
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
  margin-bottom: 10px;
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
  add: true
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px;
  font-size: ${props => props.theme.fontSizes.xm};
  width: 49%;
  background: ${props => props.theme.colors.white};
  padding: 3px 6px;
  align-items: center; 
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid ${props =>
    props.checked ? props.theme.colors.mainPurple : props.theme.colors.info};

  
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  padding: 5px;
  height: 25px;
  background: ${props =>
    props.checked ? props.theme.colors.warning : props.theme.colors.white};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid ${props =>
    props.checked ? props.theme.colors.mainPurple : props.theme.colors.info};  */
`;

const H4 = styled.h4`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const EditAddLine = ({ title, placeholder }) => {

  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
 



const handleButtonClick =(e)=>{
  e.preventDefault();
  setTodoList([...todoList, todo]); 
  setTodo('');
  return todo
};


const deleteItem =()=>{

}

console.log(todo)

return (
  <Li>
    <H4>{title}</H4>
    <Row>
      <InputEdit
        placeholder={placeholder}
        value={todo}
        onChange={e => setTodo(e.target.value)}
        type='text'
        name='input'
        
      ></InputEdit>

      <ButtonCircle onClick={handleButtonClick}>
        <i className='fas fa-plus'></i>
      </ButtonCircle>
    </Row>
    <Col>
      {
        todoList.map((listItem, i) => 
    
        <SkillLi key={i}>
          <p>{listItem}</p>
          <i className='far fa-trash-alt'></i>
        </SkillLi>
        )
      
      }
    </Col>
  </Li>
);
};

export default EditAddLine;
