// Utilities
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';

// Components

import ButtonFilter from '../../Utilities/ButtonFilter';
import ButtonLight from '../../Utilities/ButtonLight';

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
    height: 30vh;
    background: transparent;
    position: sticky;
    top: 30vh;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: space-around;
    
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
    border-radius: 3px;
    ${({ filterBar }) =>
      filterBar &&
      `
    display: flex;
    flex-direction: column;
    top: 50px;
    position: relative;
  `}
  }
  /* padding: 0px 30px 0px 10px; */
`;

const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  /* width: 10%; */
  height: 20px;
  /* line-height: 40px; */
  font-size: 10px;
  font-family: sans-serif;
  text-decoration: none;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.info};
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${props=>props.theme.fontSizes.small};
  letter-spacing: 2px;
  text-align: center;
  padding: 0px 10px;
  position: relative;
  transition: all 0.35s;
  margin: 0vh;
  z-index: 0;
  outline: none;

  &:hover {
    background: ${(props) => props.theme.colors.warning};
    color: ${(props) => props.theme.colors.primaryDark};
  }
  &:active {
    background: ${(props) => props.theme.colors.info};
    color: ${(props) => props.theme.colors.primaryDark};
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fontFamily[4]};
  margin: 10px 0px;
  position: absolute;
  left: 15px;
  /* transform: translateX(-50%); */
  top: -20px;
  border: 1px solid ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primaryLight};
  padding: 1px 15px;
  border-radius: 3px;
  opacity: 1;
  z-index: 1000;
  transition: all 0.35s ease-in;
`;

const SpanButton = styled.div`
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  display: flex;
  margin: 20px 0px 0px 0px;
  width: 95%;
`;

const SpanFields = styled.div`
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  display: flex;
  width: 95%;
  height: 50px;
`;

const SpanSubmit = styled.div`
  margin: 5px 0px;
  display: flex;
  justify-content: flex-end;
  width: 95%;
`;
const FilterBar = () => {
  const userCont = useContext(UserCont);
  const { toggleTagBar } = userCont;
  return (
    <TagBarCont filterBar={userCont.filterBar}>
      <Label>Search Filter</Label>
      <SpanButton>
        <ButtonFilter text='Engineer / Technician' onClick={toggleTagBar} />
        <ButtonFilter text='Musician' />
        <ButtonFilter text='Singer / Performance' />
        <ButtonFilter text='Studio' />
        <ButtonFilter text='Live' />
        <ButtonFilter text='Broadcasting' />
        <ButtonFilter text='Promotion' />
        <ButtonFilter text='Volunteer' />
      </SpanButton>
      <SpanFields>Input 1 </SpanFields>
      <SpanSubmit>
        <ButtonSearch>Search</ButtonSearch>
      </SpanSubmit>
    </TagBarCont>
  );
};

export default FilterBar;
