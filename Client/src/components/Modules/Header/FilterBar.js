// Utilities
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';

// Components

import ButtonFilter from '../../Utilities/ButtonFilter';

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
  const { toggleTagBar } = userCont;
  return (
    <TagBarCont filterBar={userCont.filterBar}>
      <ButtonFilter text='Engineer / Technician' onClick={toggleTagBar} />
      <ButtonFilter text='Musician' />
      <ButtonFilter text='Singer / Performance' />
      <ButtonFilter text='Studio' />
      <ButtonFilter text='Live' />
      <ButtonFilter text='Broadcasting' />
      <ButtonFilter text='Promotion' />
      <ButtonFilter text='Volunteer' />
    </TagBarCont>
  );
};

export default FilterBar;
