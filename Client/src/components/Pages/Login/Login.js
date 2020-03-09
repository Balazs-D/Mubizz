// Utilities
import React from 'react';
import styled from 'styled-components';
import Bg1 from '/home/dci/DCI/lord-of-the-script/react/mubizz/Client/src/graphics/processed/bg01.jpg';


// Components
import Input from '../../Utilities/Input';
import Button from '../../Utilities/Button';

// Styled Components

const LoginCont = styled.div`
  border: 1px solid ${props => props.theme.colors.mainPurple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 50px; */
  padding: 5%;
  border-radius: 4px;
  background-image: url(${Bg1});
  background-size: cover;
  background-position-y: bottom;
  box-shadow: 0px 0px 20px ${props => props.theme.colors.steelBlue};
`;

const RowCont = styled.form`
  width: 20vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px;
`;

const ButtonNew = styled(Button)`
background: red;`


const Login = () => {
  return (
    <LoginCont>
     
        <Input />
        <Input />
        <RowCont>
            <ButtonNew text='Login' />
            <Button text='Sign In'/>
        </RowCont>
       
     
    </LoginCont>
  );
};

export default Login;
