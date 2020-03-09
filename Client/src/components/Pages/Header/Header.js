// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import Logo from './Logo';
import Input from '../../Utilities/Input';
import Button from '../../Utilities/Button';
import NavSettings from './NavSettings';

// Styled Components

const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  /* background: ${props => props.theme.colors.mainRed}; */
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  padding: 0.5vw 1vw;
  border-bottom: 1px solid ${props => props.theme.colors.mainPurple};
  @media (min-width: 500px) {
    position: sticky;
    top: 0;
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
      <ControlContainer>
        <InputCont>
          <Input />
          <Button text='Go' />
        </InputCont>
        <InputCont>
         <NavSettings />
        </InputCont>
      </ControlContainer>
    </HeaderCont>
  );
};

export default Header;
