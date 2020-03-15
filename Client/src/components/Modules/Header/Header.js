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
import FilterBar from '../../Modules/Header/FilterBar';

// Styled Components

const HeaderCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2d3436;
background-color: #000000;
background-image: linear-gradient(-45deg, #000000 0%, #2c3e50 90%);
  /* background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%); */
  padding: 0.5vw 1vw;
  /* background: ${props => props.theme.colors.basicBlue}; */
  position: relative;
  height: 20vw;
  z-index: 1;

  @media (min-width: 800px) {
    border-bottom: 1px solid ${props => props.theme.colors.mainPurple};
    align-items: flex-start;
    flex-direction: column;
    /* box-shadow: 0px 0px 70px ${props => props.theme.colors.gradientPink}; */
    z-index: 10;
    position: sticky;
    top: 0;

    height: 30vh;
  }
`;

const InputSearch = styled(Input)`
  width: 100000%;
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0.4vw;
  width: 100%;
`;

const InputCont = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 30vw;
  position: relative;
`;

const UpperCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const SpanIcon = styled.div`
position: absolute;
top: 11px;
right: 15px;
&:hover{
  color: ${props=>props.theme.colors.mainPurple};
}

&:active{
  text-shadow: 0px 0px 5px ${props=>props.theme.colors.gradientPink};
}`

const iconStyle = {
  position: 'absolute',
  zIndex: '10',
  left: '0px',
  bottom: '-15px',
  transform: 'rotate(180deg) scale(0.7)',
  padding: '5px',
  background: '#FEDF41',
  borderRadius: '4px',
  border: '1px solid #6047A8',
  

  display: 'flex',
  cursor: 'default',
  color: '#6047A8'
};

const Header = () => {
  const userCont = useContext(userContext);

  return (
    <HeaderCont>
      <UpperCont>
        <Logo />

        <ControlContainer>
          <InputCont>
            <InputSearch placeholder='Search...' />
            <SpanIcon>
              <i class='fas fa-search'></i>
            </SpanIcon>
            {/* <Button text='Go' /> */}
          </InputCont>
          <InputCont>
            <NavSettings />
          </InputCont>
          {userCont.filterBar ? (
            <i
              style={iconStyle}
              onClick={userCont.toggleFilterBar}
              className='fas fa-arrow-circle-down'
            >
              {' '}
            </i>
          ) : (
            <i
              style={iconStyle}
              onClick={userCont.toggleFilterBar}
              className='fas fa-arrow-circle-up'
            >
              {' '}
            </i>
          )}
        </ControlContainer>
      </UpperCont>
      <FilterBar />
    </HeaderCont>
  );
};

export default Header;
