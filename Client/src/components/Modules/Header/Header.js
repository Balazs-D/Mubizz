// Libraries
import React, { useContext, Fragment } from 'react';
import styled, { css } from 'styled-components';

// Components
import Logo from './Logo';
import Input from '../../Utilities/Input';
import Button from '../../Utilities/ButtonSub';
import NavSettings from './NavSettings';
import Intro from '../Header/Intro';
import userContext from '../../../context/user/userContext';
import AuthContext from '../../../context/auth/authContext';
import ButtonMain from '../../Utilities/ButtonMain';
import FilterBar from '../../Modules/Header/FilterBar';
import TagBar from '../TagBar';


// Styled Components

const HeaderCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2d3436;
/* background: ${(props) => props.theme.colors.primaryLight}; */
  background-image: linear-gradient(to right, ${(props) =>
    props.theme.colors.basicBlue} 0%, ${(props) =>
  props.theme.colors.basicBlue} 100%);
  padding: 0.5vw 1vw;
  /* background: ${(props) => props.theme.colors.basicBlue}; */
  position: relative;
  height: 20vw;
  z-index: 1;
  border-bottom: 1px solid ${(props) => props.theme.colors.warning};
 

  @media (min-width: 800px) {
  border-bottom: 1px solid ${(props) => props.theme.colors.info};

    align-items: flex-start;
    flex-direction: column;
    /* box-shadow: 0px 0px 70px ${(props) =>
      props.theme.colors.gradientPink}; */
    z-index: 10;
    position: sticky;
    top: 0;

    height: 15vh;

    ${({ filterBar }) =>
      filterBar &&
      `
    height: 20vh;
  `}
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
  &:hover {
    color: ${props => props.theme.colors.mainPurple};
  }

  &:active {
    text-shadow: 0px 0px 5px ${props => props.theme.colors.gradientPink};
  }
`;

const iconStyle = {
  // position: 'absolute',
  zIndex: '10',
  left: '-30px',
  bottom: '4px',
  zIndex: '100',
  fontSize: '30px',
  transform: 'rotate(180deg) scale(0.7)',
  padding: '10px',
  background: '#FEDF41',
  borderRadius: '12%',
  border: '1px solid #6047A8',

  display: 'flex',
  cursor: 'default',
  color: '#6047A8'
};

const Header = () => {
  const userCont = useContext(userContext);
  const authCont = useContext(AuthContext);

  const loggedHeader = (
    <Fragment>
      <HeaderCont filterBar={userCont.filterBar}>
        <UpperCont>
          <Logo />
          {/* {userCont.filterBar ? (
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
          )} */}
          <ControlContainer>
            <InputCont>
              <InputSearch placeholder='Search...' />

              <SpanIcon>
                <i className='fas fa-search'></i>
              </SpanIcon>
              {/* <Button text='Go' /> */}
            </InputCont>
            <InputCont>
              <NavSettings />
            </InputCont>
          </ControlContainer>
        </UpperCont>

        <FilterBar />
      </HeaderCont>
      {userCont.tagBar && <TagBar />}
    </Fragment>
  );

  const logoutHeader = (
    <HeaderCont filterBar={false}>
      <UpperCont>
        <Logo />
        <ControlContainer>
          <InputCont>
            <NavSettings />
          </InputCont>
        </ControlContainer>
      </UpperCont>
    </HeaderCont>
  );

  return authCont.isAuthenticated ? loggedHeader : logoutHeader;
};

export default Header;
