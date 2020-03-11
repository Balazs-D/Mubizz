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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;

  background-image: url(${Bg1});
  background-size: cover;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-position-x: center;

  @media (min-width: 800px) {
    margin-top: 20px;
    padding: 50px;
    width: 50%;

    border: 1px solid ${props => props.theme.colors.mainPurple};
    border-radius: 4px;
    background-image: url(${Bg1});
    background-size: cover;
    background-position-y: bottom;
    box-shadow: 0px 0px 20px ${props => props.theme.colors.steelBlue};
  }
`;

const FormDiv = styled.div`
  padding: 250px 100px 0px 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (min-width: 800px) {
    padding: 20px 0px 0px 0px;

    width: 100%;
    display: flex;
    align-items: space-between;
    flex-direction: row;
  }
`;

const ColLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const ColRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;

const ButtonDiv = styled.div`
  padding: 0px 100px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 10px;
  @media (min-width: 800px) {
    padding: 0px 0px 10px 0px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    margin-top: 10px;
  }
`;

const ButtonThis = styled(Button)`
  margin-left: 10px;
`;

const ButtonSwap = styled(Button)`
  border: none;
  background: ${props => props.theme.colors.gradientPink};
`;

const InputStyleForm = styled(Input)`
margin-bottom: 5px`

const Register = props => {
  const userCont = useContext(UserContext);
  return (
    <LoginCont onSubmit={userCont.handleSubmit}>
      <FormDiv>
        <ColLeft>
          <InputStyleForm placeholder='Your first name...' value={userCont.email} />
          <InputStyleForm placeholder='Your e-mail...' value={userCont.email} />
          <InputStyleForm placeholder='Select a password...' value={userCont.email} />
        </ColLeft>
        <ColRight>
          <InputStyleForm placeholder='Your last name...' value={userCont.email} />
          <InputStyleForm placeholder='Repeat your e-mail...' value={userCont.email} />
          <InputStyleForm placeholder='Repeat your password...' value={userCont.password} />
        </ColRight>
      </FormDiv>

      <ButtonDiv>
        <ButtonSwap text='Back to Login' />
        <ButtonThis text='Sigin' />
      </ButtonDiv>
    </LoginCont>
  );
};

export default Register;