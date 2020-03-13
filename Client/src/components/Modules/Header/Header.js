// Libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import Logo from './Logo';
import Input from '../../Utilities/Input';
import Button from '../../Utilities/Button';
import NavSettings from './NavSettings';
import Intro from '../Header/Intro';
import userContext from '../../../context/user/userContext';
import RollButton from '../../Utilities/RollButton';

// Styled Components

const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  padding: 0.5vw 1vw;
  position: relative;
  height: 20vw;
  z-index: 1;

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

const TextSpanOn = styled.p`
  transform: rotate(180deg);
  text-transform: uppercase;
  padding-right: 5px;
  /* font-size: ${props => props.theme.fontSizes.small} */
`;
const TextSpanOff = styled.p`
  transform: rotate(0deg);
  text-transform: uppercase;
  padding-right: 5px;
  /* font-size: ${props => props.theme.fontSizes.small} */
`;

const iconStyle = {
  position: 'absolute',
  right: '0px',
  bottom: '-15px',

  transform: 'rotate(180deg) scale(0.7)',
  padding: '5px',
  // paddingLeft: '45px',
  background: '#FEDF41',
  borderRadius: '4px',
  border: '1px solid black',
  display: 'flex',
  cursor: 'pointer'
};

const Header = () => {
  const userCont = useContext(userContext);

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

        <i
          style={iconStyle}
          onClick={userCont.toggleFilterBar}
          className='fas fa-arrow-up'
        >
          {userCont.filterBar ? (
            <TextSpanOn>Filters</TextSpanOn>
          ) : (
            <TextSpanOff>Filters</TextSpanOff>
          )}
        </i>
      </ControlContainer>
    </HeaderCont>
  );
};

export default Header;
