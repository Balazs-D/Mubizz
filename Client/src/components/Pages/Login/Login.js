// Utilities
import React, {useContext} from 'react';
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 30vh;
    padding: 5%;
    border-radius: 4px;
    background-image: url(${Bg1});
    background-size: cover;
    background-position-y: bottom;
    box-shadow: 0px 0px 20px ${props => props.theme.colors.steelBlue};
  }
`;

const RowCont = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px 0px;
`;

const ButtonInPlace = styled(Button)`
  margin-left: 5px;
`;

const ButtonLogin = styled(Button)`
  background: white;
  margin-left: 5px;
`;

const InputInPlace = styled(Input)`
  margin-left: 5px;
`;

const Login = props => {

  const userCont = useContext(UserContext);

  return (
    <LoginCont>
      <RowCont>
        <Input placeholder='Your e-mail...' />
        <InputInPlace placeholder='Your password...' />
      </RowCont>
      <RowCont>
        <ButtonInPlace text='Signin' />

        <ButtonLogin text='Login' onClick={userCont.handleLogin}/>
      </RowCont>
    </LoginCont>
  );
};

export default Login;
