// Utilities
import React, {useContext} from 'react';
import styled from 'styled-components';
import userContext from '../../context/user/userContext';

// Components

// Styled Comp

const FilterContOn = styled.div`
  width: 100%;
  height: 10vh;
  background: lightslategray;
  position: relative;
  z-index: 0;
`;

const FilterContOff = styled.div`
  width: 100%;
  height: 0vh;
  background: lightslategray;
  position: relative;
  z-index: 0;
`;

const FilterBar = () => {
  const userCont = useContext(userContext);

return (
  userCont.filterBar ? <FilterContOn>HERE: Buttons with different filter tags like Musician, Singer, Technician....fetch with filter</FilterContOn> : <FilterContOff></FilterContOff>)};

export default FilterBar;
