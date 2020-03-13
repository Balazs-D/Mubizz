// Utilities
import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';
import Bg1 from '/home/dci/DCI/lord-of-the-script/react/mubizz/Client/src/graphics/processed/bg01.jpg';
import UserContext from '../../../context/user/userContext';
import AuthContext from '../../../context/auth/authContext';
import AlertContext from '../../../context/alert/alertContext';

// Components
import Input from '../../Utilities/Input';
import Button from '../../Utilities/Button';
import RollButton from '../../Utilities/RollButton';
import Login from '../Auth/Login';
import Alerts from '../Alerts';
import WinTitle from '../../Utilities/WinTitle';
import WinTitleOff from '../../Utilities/WinTitleOff';

// Styled Components

const LoginCont = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  position: relative;

  background-image: url(${Bg1});
  background-size: cover;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-position-x: center;

  @media (min-width: 800px) {
    margin: 80px;
    padding: 50px;
    width: 50%;
    display: flex;

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
    justify-content: center;
    flex-direction: row;
  }
`;

const ColLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const ColRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    padding: 10px 10px 10px 10px;
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
  background: ${props => props.theme.colors.gradientPink};
`;

const InputStyleForm = styled(Input)`
  margin-bottom: 15px;
  width: 95%;
`;






const Register = props => {
  const userCont = useContext(UserContext);
  const authCont = useContext(AuthContext);
  const alertCont = useContext(AlertContext);

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    password: '',
    password2: '',
    email: '',
    email2: ''
  });
  
  const { firstName, lastName, email, email2, password, password2 } = user;
  const { setAlert } = alertCont;
  const { register, error } = authCont;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log('on submit');
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === ''
    ) {
      setAlert('Please enter all fields');
      console.log('error 02')
    } else if (password !== password2) {
      setAlert('Password do have to match!');
            console.log('error 03');

    } else {
      register({
        firstName,
        lastName,
        email,
        password
      });
    }
  };

  return (
    <LoginCont onSubmit={onSubmit}>
      <WinTitle text='registration'></WinTitle>
      <Link to='/login'>
        <WinTitleOff text='to login' component={Link} to='/login'>
          To Login
        </WinTitleOff>
      </Link>
      <FormDiv>
        <Alerts />
        <ColLeft>
          <InputStyleForm
            placeholder='Your first name...'
            name='firstName'
            value={firstName}
            onChange={onChange}
            label='NAME'
          />
          <InputStyleForm
            placeholder='Your e-mail...'
            name='email'
            value={email}
            onChange={onChange}
            label='E-MAIL'
          />
          <InputStyleForm
            placeholder='Select a password...'
            name='password'
            value={password}
            onChange={onChange}
            label='PASSWORD'
          />
        </ColLeft>
        <ColRight>
          <InputStyleForm
            placeholder='Your last name...'
            value={lastName}
            name='lastName'
            onChange={onChange}
            label='*'
          />
          <InputStyleForm
            placeholder='Repeat your e-mail...'
            value={email2}
            name='email2'
            onChange={onChange}
            label='*'
          />
          <InputStyleForm
            placeholder='Repeat your password...'
            name='password2'
            value={password2}
            onChange={onChange}
            label='*'
          />
        </ColRight>
      </FormDiv>

      <ButtonDiv>
       
        <RollButton text='Signin' value='Register' onClick={onSubmit} />
      </ButtonDiv>
    </LoginCont>
  );
};

export default Register;
