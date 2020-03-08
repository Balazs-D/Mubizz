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
  background: ${props => props.theme.colors.mainRed};
  padding: 0.5vw 1vw;
  @media (min-width: 500px) {
    padding: 0.5vw 0.5vw;
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

const InputRightCut = styled(Input)`
  border-radius: 0px;
`;

const Header = () => {
  return (
    <HeaderCont>
      <Logo />
      <ControlContainer>
        <InputCont>
          <Input />
          <Button />
        </InputCont>
        <InputCont>
         <NavSettings />
        </InputCont>
      </ControlContainer>
    </HeaderCont>
  );
};

export default Header;
