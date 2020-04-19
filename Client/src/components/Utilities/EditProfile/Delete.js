// Utilities
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

// Component

import InputMinimal from '../InputMinimal';
import ButtonLight from '../ButtonLight';

import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Styled Comp

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* margin: 20px; */
  height: 100%;

  border: 1px solid ${(props) => props.theme.colors.danger};
  border-radius: 3px;
  padding: 10px;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  position: relative;
  border-radius: 0px;
  border-left: 3px solid ${(props) => props.theme.colors.danger};
  background: ${(props) => props.theme.colors.primaryLight};
`;

const AddButton = styled.input.attrs({ type: 'button' })`
  display: block;

  width: 80%;
  height: 80%;
  /* line-height: 40px; */
  font-size: 10px;
  font-family: sans-serif;
  text-decoration: none;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.gradientYellow};
  border: 1px solid ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.mainPurple};
  letter-spacing: 2px;
  text-align: center;
  box-shadow: 0px 0px 0px 3px ${(props) => props.theme.colors.white},
    0px 0px 5px 3px ${(props) => props.theme.colors.mainPurple};
  /* box-shadow: 0px 0px 5px ${(props) => props.theme.colors.mainPurple}; */

  font-family: ${(props) => props.theme.fontFamily[4]};
  font-size: ${(props) => props.theme.fontSizes.half};

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

const Box = styled.div`
  width: 50%;
  height: 70px;
  /* border-radius: 0px;
  border-left: 3px solid ${(props) => props.theme.colors.danger};
  background: ${(props) => props.theme.colors.primaryLight}; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.mainPurple};
  padding: 5px;
`;

const BoxTwo = styled.div`
  width: 40%;
  height: 70px;
  border-radius: 3px;
  /* border: 1px solid ${(props) => props.theme.colors.danger}; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.mainPurple};
  padding: 5px;
  /* background: ${(props) => props.theme.colors.danger}; */
`;

const P = styled.p`
  width: 90%;
  height: 90%;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fontFamily[4]};
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 10px 0px;
  position: absolute;
  left: 4%;
  top: -23px;
  border: 1px solid ${(props) => props.theme.colors.danger};
  background: ${(props) => props.theme.colors.gradientYellow};
  padding: 3px 8px;
  border-radius: 3px;
`;

const Delete = ({ placeholder, label }) => {
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);

  const deleteProfile = (e) => {};

  // useEffect(() => {}, [skillsArray]);

  return (
    <Li>
      <Label>{label}</Label>
      <Row>
        <Box>
          <P>Are you sure to delete your MUBIZZ profile?</P>
        </Box>
        <BoxTwo>
          <AddButton onClick={deleteProfile} value='Delete Profile'></AddButton>
        </BoxTwo>
      </Row>
    </Li>
  );
};

export default Delete;
