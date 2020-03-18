// Utilities
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Bg1 from '/home/dci/DCI/lord-of-the-script/react/mubizz/Client/src/graphics/processed/bg01.jpg';
import UserContext from '../../../context/user/userContext';
import AuthContext from '../../../context/auth/authContext';
import AlertContext from '../../../context/alert/alertContext';

// Components
import Input from '../../Utilities/Input';
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



const InputStyleForm = styled(Input)`
  margin-bottom: 15px;
  width: 95%;
`;


// useEffect(()=>{
//   authCont.isAuthenticated === true &&

// },[authCont.isAuthenticated])



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
  
  const { name , email, email2, password, password2 } = user;
  const { setAlert } = alertCont;
  const { register, error, clearErrors } = authCont;

  useEffect(()=>{
    if(error === 'User already exists'){
      setAlert(error, 'danger');
      clearErrors()
    }
  }, [error])

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log('on submit');
    if (
     
      name === '' ||
      email === '' ||
      password === ''
    ) {
      setAlert('Please enter all fields', 'danger');
      console.log('error 02')
    }
    //  else if (password !== password2) {
    //   setAlert('Passwords do have to match!', 'danger');
    //         console.log('error 03');

    // }
     else {
      register({
        // FormData
        name,
        email,
        password
      });
      
     
    }
    console.log(authCont);
  };

  //  const onSubmit = async e => {
  //    e.preventDefault();

  //    let res = null;

  //    try {
  //      res = await axios.post('http://localhost:5000/api/auth', {
  //        email,
  //        password
  //      });
  //      console.log(res.data);
  //    } catch (error) {
  //      console.log(error.message);
  //    }
  //  };


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
            required
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
        </ColLeft>
       
      </FormDiv>

      <ButtonDiv>
        <RollButton text='Signin' value='Register' onClick={onSubmit} />
      </ButtonDiv>
    </LoginCont>
  );
};

export default Register;