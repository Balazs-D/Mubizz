// Utilities
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

// Component

import InputMinimal from '../InputMinimal';
import ButtonLight from '../ButtonLight';

import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Styled Comp

const InputEdit = styled(CountryDropdown)`
  padding: 5px;
  font-size: ${(props) => props.theme.fontSizes.small};
  /* font-style: italic; */
  border-radius: 4px;
  width: 100%;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.mainBlue};
  margin: 10px;
  background: ${(props) => props.theme.colors.infoLight};
    /* font-family: ${props=>props.theme.fontFamily[4]}; */
  &:focus {
    box-shadow: 0px 0px 3px ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.mainPurple};
    background: ${(props) => props.theme.colors.gradientYellow};
    font-weight: bold;
    font-style: normal;
  }
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 95%;
  margin: 20px;
  height: 100%;

  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  padding: 10px;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
  justify-content: center;
  margin-bottom: 10px;
`;

const Icon = styled.i`
  transition: all 0.3s ease-in;
`;

const SkillLi = styled.div.attrs({
  add: true,
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2px;
  font-size: ${(props) => props.theme.fontSizes.xm};
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  padding: 3px 6px;
  align-items: center;
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid
    ${(props) =>
      props.checked ? props.theme.colors.mainPurple : props.theme.colors.info};
  color: ${(props) => props.theme.colors.mainPurple};
  transition: all 0.3s ease-in;

  &:hover {
    background: ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.white};
  }

  &:hover ${Icon} {
    color: ${(props) => props.theme.colors.white};
  }
`;

const AddButton = styled(ButtonLight).attrs({ type: 'button' })`
  position: absolute;
  transition: all 0.3s ease-in;
  bottom: 20%;
  right: 2%;
  background: white;

  &:hover {
    background: ${(props) => props.theme.colors.info};
    border: 1px solid ${(props) => props.theme.colors.mainPurple};
  }
`;

const H4 = styled.h4`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 10px 0px;
  position: absolute;
  left: 4%;
  top: -23px;
  border: 1px solid ${(props) => props.theme.colors.info};
  background: white;
  padding: 1px 4px;
  border-radius: 3px;
`;

const EditLocation = ({ placeholder, label }) => {
 
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);
   const [country, setCountry] = useState(authCont.profile.location);
   const [countryArray, setCountryArray] = useState([]);

  // ! Child component gets AuthContext (Fetched Database) data:
  useEffect(() => {
    setCountryArray(authCont.profile.location);
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (country === '') {
      return null;
    } else {
      countryArray.push(country);
      console.log(countryArray);
      // setSkillsArray([...skillsArray, skill])
      authCont.updateLocation(countryArray);
      console.log(countryArray);
      setCountry('');
    }
  };

  const onChange = (e) => {
    setCountry(e);

    console.log(country);
  };

  const deleteItem = (e) => {
    e.preventDefault();

    let itemInd = countryArray.indexOf(e.target.attributes['value'].value);
    countryArray.splice(itemInd, 1);
    authCont.updateLocation(countryArray);
  };

  useEffect(() => {
    authCont.updateLocation(country);
  }, [country]);

  return (
    <Li>
      <Label>{label}</Label>
      <Row>
        {/* <InputEdit
          placeholder={placeholder}
          value={country}
          onChange={(e) => setSkill(e.target.value)}
          type='text'
          name='input'
          placeholderFontSize='1px'
        ></InputEdit> */}
        <InputEdit value={country} onChange={(e) => onChange(e)} />
        {/* <AddButton onClick={handleButtonClick} text='+' /> */}
      </Row>

      
    </Li>
  );
};

export default EditLocation;
