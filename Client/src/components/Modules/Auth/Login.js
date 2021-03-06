// Utilities
import React, { useContext, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Bg1 from '../../../graphics/processed/bg01.jpg';
import AlertContext from '../../../context/alert/alertContext';
import AuthContext from '../../../context/auth/authContext';


// Components
import Input from '../../Utilities/Input';
import ButtonMain from '../../Utilities/ButtonMain';
import WinTitle from '../../Utilities/WinTitle';
import WinTitleOff from '../../Utilities/WinTitleOff';
import Alert from '../Alerts';

const Login = props => {
  const [user, setUser] = useState({
    password: '',
    email: ''
  });

  // const [ errors, setErrors ] = useState([]);


  const authCont = useContext(AuthContext);
  const alertCont = useContext(AlertContext);

  const { email, password } = user;
  const { setAlert } = alertCont;
  const { login, getProfile, error, clearErrors, isAuthenticated } = authCont;

  // Re-render  //  Re-direct
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard/intro');

      
      // getProfile();
    }
    if (error === 'User does not exists.') {
      setAlert(error);
      clearErrors();
    }

    if (error === 'Password and E-Mail does not match.') {
      setAlert(error);
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    console.log(e.target);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill all fields');
    } else {
      login({
        email,
        password
      });
      
    }
console.log(authCont.error)
    let res = null;

    // try {
    //   res = await axios.post('http://localhost:5000/api/auth', {
    //     email,
    //     password
    //   });
    //   console.log(res.data);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  console.log('Re-rendering', { email, password });

  return (
    <MainCont>
      <LoginCont onSubmit={onSubmit}>
        <WinTitle text='Login'>Login</WinTitle>
        <Alert />
        <Link to='/register'>
          <WinTitleOff text='to registration' component={Link} to='/register'>
            To Registration
          </WinTitleOff>
        </Link>

        <FormDiv>
          <ColLeft>
            <Input
              placeholder='Your e-mail...'
              name='email'
              value={email}
              onChange={onChange}
              label='E-Mail'
            />

            <Input
              placeholder='Your password...'
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              label='Password'
            />

            <ButtonDiv>
              <ButtonMain text='Login' onClick={onSubmit} />
            </ButtonDiv>
          </ColLeft>
        </FormDiv>
      </LoginCont>
    </MainCont>
  );
};

export default withRouter(Login);

// Styled Components

const MainCont = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${props=>props.theme.colors.primaryLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
    margin: 80px 80px 160px 80px;
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
    margin-top: 25px;
  }
`;

