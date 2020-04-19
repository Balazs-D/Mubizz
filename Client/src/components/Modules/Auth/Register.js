// Utilities
import React, { useContext, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import styled from 'styled-components';
import Bg1 from '/home/dci/DCI/lord-of-the-script/react/mubizz/Client/src/graphics/processed/bg01.jpg';
import UserContext from '../../../context/user/userContext';
import AuthContext from '../../../context/auth/authContext';
import AlertContext from '../../../context/alert/alertContext';

// Components
import Input from '../../Utilities/Input';
import ButtonMain from '../../Utilities/ButtonMain';
import Alerts from '../Alerts';
import WinTitle from '../../Utilities/WinTitle';
import WinTitleOff from '../../Utilities/WinTitleOff';

const Register = (props) => {
  const authCont = useContext(AuthContext);
  const alertCont = useContext(AlertContext);

  const [user, setUser] = useState({
    name: '',
    password: '',
    email: '',
  });

  const { name, email, password } = user;
  const { setAlert } = alertCont;
  const {
    register,
    error,
    getProfile,
    clearErrors,
    isAuthenticated,
  } = authCont;

  // Re-render  //  Re-direct
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    };

    

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Submit
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('on submit');
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields');
      console.log('error 02');
    }
    if (error === 'User already exists') {
      setAlert(error);
      clearErrors();

    } else if (error === 'Please include a valid email') {
      setAlert(error);
      clearErrors();
      
    } else {
      register({
        // FormData
        name,
        email,
        password,
      });
      getProfile();
    }
    console.log(authCont);
  };

  return (
    <LoginCont onSubmit={onSubmit}>
      <WinTitle text='registration'></WinTitle>

      <Link to='/login'>
        <WinTitleOff text='to login' component={Link} to='/login'>
          To Login
        </WinTitleOff>
      </Link>
      <Alerts />
      <FormDiv>
        <ColLeft>
          <InputStyleForm
            placeholder='Your first name...'
            name='name'
            value={name}
            onChange={onChange}
            label='NAME'
            autoFocus
          />
          <InputStyleForm
            placeholder='Your e-mail...'
            name='email'
            value={email}
            onChange={onChange}
            label='E-MAIL'
          />
          <InputStyleForm
            type='password'
            placeholder='Select a password...'
            name='password'
            value={password}
            onChange={onChange}
            label='PASSWORD'
          />

          <ButtonDiv>
            <ButtonMain text='Signin' value='Register' onClick={onSubmit} />
          </ButtonDiv>
        </ColLeft>
      </FormDiv>
    </LoginCont>
  );
};

export default withRouter(Register);

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

    border: 1px solid ${(props) => props.theme.colors.mainPurple};
    border-radius: 4px;
    background-image: url(${Bg1});
    background-size: cover;
    background-position-y: bottom;
    box-shadow: 0px 0px 20px ${(props) => props.theme.colors.steelBlue};
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

const InputStyleForm = styled(Input)`
  margin-bottom: 15px;
  width: 95%;
`;
