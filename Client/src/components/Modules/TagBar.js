// Utilities
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import userContext from '../../context/user/userContext';
import RollButton from '../Utilities/RollButton';

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
    background: ${props => props.theme.colors.steelBlue};
    position: sticky;
    top: 30vh;
    z-index: 1;
    display: hidden;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px 0px 30px;
    border-bottom: 1px solid ${props => props.theme.colors.mainPurple};
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

const TagButton = styled(RollButton)`
  border-radius: 4px;
  display: flex;
  text-align: end;
  color: ${props => props.theme.colors.mainPurple};
  border: 1px solid ${props => props.theme.colors.mainPurple};

  &:hover {
    color: ${props => props.theme.colors.gradientYellow};
  }
`;



const FilterBar = () => {
  const userCont = useContext(userContext);

  // userCont.filterBar ?
  return (
    
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
    // ) : (
    // <FilterContOff></FilterContOff>
  )
};

export default FilterBar;
