// Utilities
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import userContext from '../../context/user/userContext';
import ButtonMain from '../Utilities/ButtonMain';
import { Tween, Timeline } from 'react-gsap';

// Components


// Styled Comp

const FilterContOn = styled.div`
  width: 100%;
  height: 7vh;
  background: ${props => props.theme.colors.basicYellow};
  position: sticky;
  top: 30vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 10px;
  border-bottom: 1px solid ${props => props.theme.colors.mainPurple};
  display: none;

  @media (min-width: 800px) {
    width: 100%;
    height: 7vh;
    background-color: ${props => props.theme.colors.white};
    position: sticky;
    top: 30vh;
    z-index: 1;
    display: hidden;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px 0px 30px;
    border-bottom: 2px solid ${props => props.theme.colors.info};
  }

  ${({ filterBar }) =>
    filterBar &&
    css`
      display: flex;
    `}
`;

const FilterContOff = styled.div`
  width: 100%;
  height: 0vh;
  background: lightslategray;
  position: relative;
  z-index: 0;
`;

const TagButton = styled(ButtonMain)`
  border-radius: 4px;
  display: flex;
  text-align: end;
  color: ${props => props.theme.colors.primaryDark};
  border: 1px solid ${props => props.theme.colors.secondaryDecent};
  background: transparent;

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.darkOne};
  }
  &:active {
    color: ${props => props.theme.colors.primaryDark};
    background: ${props => props.theme.colors.secondaryBright};
  }
`;

const FilterBar = () => {
  const userCont = useContext(userContext);

  // userCont.filterBar ?
  return (
    <Tween from={({ y: '-50px' }, { duration: '0.5' })}>
      <FilterContOn filterBar={userCont.filterBar}>
        <TagButton text='Recording' />
        <TagButton text='' />
        <TagButton text='' />
        <TagButton text='' />
        <TagButton text='' />
        <TagButton text='' />
        <TagButton text='' />
        <TagButton text='' />
        <TagButton text='' />
        <TagButton text='' />
      </FilterContOn>
    </Tween>
    // ) : (
    // <FilterContOff></FilterContOff>
  );
};

export default FilterBar;
