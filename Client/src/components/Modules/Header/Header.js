// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import Logo from './Logo';
import Input from '../../Utilities/Input';
import Button from '../../Utilities/Button';
import NavSettings from './NavSettings';
import Intro from '../Header/Intro';

// Styled Components

const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  padding: 0.5vw 1vw;
  position: relative;
  height: 20vw;
  @media (min-width: 800px) {
    border-bottom: 1px solid ${props => props.theme.colors.mainPurple};
    align-items: center;
    box-shadow: 0px 0px 70px ${props => props.theme.colors.gradientPink};

    position: sticky;
    top: 0;
   
    height: 15vh;
  }
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.4vw;
`;

const InputCont = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Header = () => {
  return (
    <HeaderCont>
      <Logo />

      <ControlContainer>
        <NavSettings />
        {/* <InputCont>
          <Input placeholder='Search...'/>
          <Button text='Go' />
        </InputCont>
        <InputCont>
         <NavSettings />
        </InputCont> */}
      </ControlContainer>
    </HeaderCont>
  );
};

export default Header;
