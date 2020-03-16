// Utilities
import React, {useContext} from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';

// Components

import FilterButton from '../../Utilities/FilterGrowButton';

// Styled Comp
const TagBarCont = styled.div`
  display: none;
  /* width: 100%;
  height: 7vh;
  background: transparent;
  position: sticky;
  top: 30vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center; */

  @media (min-width: 800px) {
    width: 100%;
    height: 7vh;
    background: transparent;
    position: sticky;
    top: 30vh;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: space-between;
    align-items: center;

    ${({ filterBar }) =>
      filterBar &&
      `
    display: flex;
  `}
  }
  /* padding: 0px 30px 0px 10px; */
`;

const FilterBar = () => {

  const userCont = useContext(UserCont);
  return (
    <TagBarCont filterBar={userCont.filterBar}>
      <FilterButton text='Engineer / Technician' />
      <FilterButton text='Musician' />
      <FilterButton text='Singer / Performance' />
      <FilterButton text='Studio' />
      <FilterButton text='Live' />
      <FilterButton text='Broadcasting' />
      <FilterButton text='Promotion' />
      <FilterButton text='Volunteer' />
    </TagBarCont>
  );
};

export default FilterBar;
