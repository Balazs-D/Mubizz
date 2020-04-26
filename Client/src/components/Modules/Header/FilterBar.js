// Utilities
import React, { useContext, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

// Components

import ButtonFilter from '../../Utilities/ButtonFilter';
import ButtonTag from '../../Utilities/ButtonTag';
import InputMinimal from '../../Utilities/InputMinimal';
import Location from '../../Utilities/EditProfile/Location';

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
    height: 50vh;
    background: ${(props) => props.theme.colors.vueBlue};
    position: sticky;
    top: 30vh;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: space-around;

    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.info};
    /* box-shadow: 0px 0px 2px 1px ${(props) =>
      props.theme.colors.primaryLight}; */
    border-radius: 3px;
    ${({ filterBar }) =>
      filterBar &&
      `
    display: flex;
    flex-direction: column;
    top: 50px;
    position: relative;
    padding: 40px 0px 0px 0px; */

  `}
  }
`;

const LocationField = styled(CountryDropdown)`
  padding: 7px;
  font-size: ${(props) => props.theme.fontSizes.small};
  /* font-style: italic; */
  border-radius: 4px;
  width: 100%;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.mainBlue};
  margin: 10px;
  background: ${(props) => props.theme.colors.white};
  &:focus {
    box-shadow: 0px 0px 3px ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.mainPurple};
    background: ${(props) => props.theme.colors.infoLight};
    font-weight: bold;
    font-style: normal;
  }
`;

const InputEdit = styled(InputMinimal)`
  padding: 5px;
  margin: 10px;

  text-transform: italic;
  font-weight: lighter;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.info};
  background: white;
  border-radius: 3px;
  &:focus {
    background: ${(props) => props.theme.colors.white};
    text-transform: normal;
    font-weight: bold;
  }
  &:hover {
    background: ${(props) => props.theme.colors.infoLight};
  }

  &:active {
    background: ${(props) => props.theme.colors.gradientYellow};
  }
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
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fontFamily[4]};

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
  color: ${(props) => props.theme.colors.infoLight};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fontFamily[4]};
  /* margin: 10px 0px; */
  position: absolute;
  left: 7.3%;
  transform: translateX(-50%);
  top: 0px;
  border-left: 1px solid ${(props) => props.theme.colors.info};
  border-right: 1px solid ${(props) => props.theme.colors.info};
  border-bottom: 1px solid ${(props) => props.theme.colors.info};

  background: ${(props) => props.theme.colors.basicBlue};
  padding: 10px 25px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

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
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  margin: 20px 0px 0px 0px;
  width: 95%;
  background: ${(props) => props.theme.colors.basicBlue};
  /* box-shadow: 0px 0px 1px 1px ${(props) =>
    props.theme.colors.primaryLight}; */

  /* height: 50px; */
`;

const SpanInput = styled.div`
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  margin: 20px 0px 0px 0px;
  width: 95%;
  background: ${(props) => props.theme.colors.basicBlue};
  width: 30%;
  position: relative;
  margin: 30px 0px 20px 0px;
`;

const LabelInput = styled.label`
  color: ${(props) => props.theme.colors.info};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 10px 0px;
  position: absolute;
  font-family: ${(props) => props.theme.fontFamily[4]};
  font-size: ${(props) => props.theme.fontSizes.small};
  left: 0%;
  top: -30px;
  /* border: 1px solid ${(props) => props.theme.colors.info}; */
  /* background: white; */
  padding: 1px 4px;
  /* border-radius: 3px; */
`;

const Button = styled.input.attrs({ type: 'button' })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  padding: 5px;
  height: 25px;
  transition: all 0.3s ease-in;
  background: ${(props) =>
    props.checked ? props.theme.colors.gradientPink : props.theme.colors.white};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid
    ${(props) =>
      props.checked
        ? props.theme.colors.gradientYellow
        : props.theme.colors.white};
  color: ${(props) =>
    props.checked ? props.theme.colors.mainPurple : props.theme.colors.darkOne};
  font-size: ${(props) => props.theme.fontSizes.xm};
  margin: 10px 5px 10px 5px;
  outline: none;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.mainPurple};
    background: ${(props) =>
      props.checked ? props.theme.colors.lightGrey : props.theme.colors.info};
  }

  &:active {
    border: 1px solid ${(props) => props.theme.colors.gradientPink};
    color: ${(props) => props.theme.colors.mainPurple};
    background: ${(props) => props.theme.colors.infoLight};
  }
`;

const SpanSubmit = styled.div`
  margin: 5px 0px;
  display: flex;
  justify-content: flex-end;
  width: 95%;
`;
const FilterBar = (props) => {
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);

  const { toggleTagBar } = userCont;
  const [tagArr, setTagArr] = useState([]);
  const ServiceFieldArray = [
    'Sound Technician',
    'Sound Engineer',
    'Singer',
    'Musician',
    'Performance',
    'Studio',
    'Live',
    'Broadcasting',
    'Promotion',
    'Management',
    'Volunteer',
  ];

  const [country, setCountry] = useState('');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const [searchTags, setSearchTags] = useState('');

  const toggleClick = (e) => {
    e.preventDefault();
    if (tagArr.includes(e.target.value)) {
      let index = tagArr.indexOf(e.target.value);
      tagArr.splice(index, 1);
    } else {
      tagArr.push(e.target.value);
    }
    console.log(tagArr);
    console.log(e.target.value);
    const update = tagArr.filter((item) => item !== '');

    setTagArr(update);
    console.log(e.target.checked);
    console.log(update);
  };

  const onChange = (e) => {
    setCountry(e);

    console.log(country);
  };

  const handleSearch = async () => {
    await authCont.getFetchedOffers();
    await authCont.getFetchedProfiles();
    await userCont.toggleFilterBar();
    await props.history.push('/dashboard/filter');
  };

  return (
    <TagBarCont filterBar={userCont.filterBar}>
      <Label>Search Filter</Label>
      <SpanFields>
        {ServiceFieldArray.map((field, i) => {
          return (
            <Button
              key={i}
              value={field}
              text={field}
              onClick={toggleClick}
              checked={tagArr.includes(field) ? true : false}
            ></Button>
          );
        })}
      </SpanFields>
      <SpanFields>
        <SpanInput>
          <LabelInput>location</LabelInput>
          <LocationField value={country} onChange={(e) => onChange(e)} />
        </SpanInput>

        <SpanInput>
          <LabelInput>language</LabelInput>
          <InputEdit />
        </SpanInput>

        <SpanInput>
          <LabelInput>keyword</LabelInput>
          <InputEdit />
        </SpanInput>
      </SpanFields>
      <SpanSubmit>
        <ButtonSearch onClick={(e) => handleSearch(e)}>Search</ButtonSearch>
      </SpanSubmit>
    </TagBarCont>
  );
};

export default withRouter(FilterBar);
