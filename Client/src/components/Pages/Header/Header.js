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
  border-bottom: 1px solid ${props => props.theme.colors.mainPurple};
  position: relative;
  @media (min-width: 320px) {
    position: sticky;
    top: -23.5vw;
    height: 70vh;
  }
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

      <Intro />
      {/* <ControlContainer>
        <InputCont>
          <Input placeholder='Search...'/>
          <Button text='Go' />
        </InputCont>
        <InputCont>
         <NavSettings />
        </InputCont>
      </ControlContainer> */}
    </HeaderCont>
  );
};

export default Header;
