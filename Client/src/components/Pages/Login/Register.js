    // Utilities
import React, { useContext, useState, Fragment } from 'react';
import styled from 'styled-components';
import Bg1 from '/home/dci/DCI/lord-of-the-script/react/mubizz/Client/src/graphics/processed/bg01.jpg';
import UserContext from '../../../context/user/userContext';

// Components
import Input from '../../Utilities/Input';
import Button from '../../Utilities/Button';

// Styled Components

const LoginCont = styled.form`
  /* border: 1px solid ${props => props.theme.colors.mainPurple}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border-radius: 4px; */
  background-image: url(${Bg1});
  background-size: cover;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-position-x: center;

  @media (min-width: 500px) {
    border: 1px solid ${props => props.theme.colors.mainPurple};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 40vw;
    /* height: 30vh; */
    padding: 1%;
    border-radius: 4px;
    background-image: url(${Bg1});
    background-size: cover;
    background-position-y: bottom;
    box-shadow: 0px 0px 20px ${props => props.theme.colors.steelBlue};
  }
`;

const RowCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px 0px;
  @media (min-width: 800px) {
    
   
  }
`;

const ButtonDiv = styled.div`
/* width: 50%; */
height: 100%;
padding-top: 5px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-content: center;
/* background: red; */
`; 

const InputCont = styled.div`
display: flex;
flex-direction: column;
align-items:flex-start;
width: 80%;`

const ButtonInPlace = styled(Button)`
  margin-right: 5px;
  background: transparent;
  border: none;
  color: white;
  width: 100%;
  &:hover{
      color:black;
  }
`;

const ButtonAction = styled(Button)`
  background: white;
  margin-right: 5px;
  width: 100%;
  margin-top: 5px;
`;

const InputInPlace = styled(Input)`
  margin-left: 5px;
`;

const InputMail = styled(Input)`
width: 100%`

const Register = props => {
  const userCont = useContext(UserContext);
console.log(userCont)
  return (
    <LoginCont onSubmit={userCont.handleSubmit}>
      <InputCont>
        <RowCont>
          <Input placeholder='First name... ' />
          <InputInPlace placeholder='Last name...' />
        </RowCont>

        <RowCont>
          {/* <label for='email'>E-Mail</label> */}
          <Input placeholder='Your password...' value={userCont.email} />
          <InputInPlace
            placeholder='Repeat your password...'
            value={userCont.password}
          />
        </RowCont>

        <RowCont>
          <InputMail placeholder='Your e-mail...' value={userCont.email} />
        </RowCont>
      </InputCont>
      <ButtonDiv>
        <ButtonInPlace text='Login' />

        <ButtonAction text='Signin' />
      </ButtonDiv>
    </LoginCont>
  );
};

export default Register;








