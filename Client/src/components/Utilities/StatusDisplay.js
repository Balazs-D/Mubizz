import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import AuthCont from '../../context/auth/authContext';

const StatusDisplay = ({ color, text }) => {
  const authCont = useContext(AuthCont);
  const [statusLevel, setStatusLevel] = useState('');

  useEffect(() => {
    console.log(authCont.member);
    console.log(authCont.creator);
    console.log(authCont.pro);
    

    if (authCont.member === true) {
      setStatusLevel('Member');
    } else if (authCont.creator === true) {
      setStatusLevel('Creator');
    } else if (authCont.pro === true) {
      setStatusLevel('Pro');
    } else {
      setStatusLevel('User');
    }
  }, [authCont.member, authCont.pro, authCont.creator]);

  return <Status color={statusLevel} >{statusLevel}</Status>;
};

export default StatusDisplay;

const handleColorType = (color) => {
  switch (color) {
    case 'Member':
      return '#6D87B9';
    case 'Creator':
      return '#3EC43B';
    case 'Pro':
      return '#fa709a';
    default:
      return '#B3A878';
  }
};

const Status = styled.p`
  color: ${(props) => props.theme.colors.white};
  background: ${({ color }) => handleColorType(color)};
  border-radius: 2px;

  display: flex;
  align-self: flex-start;
  justify-self: center;

  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.xm};
  font-family: ${(props) => props.theme.fontFamily[4]};
  font-weight: 100;
  padding: 0 10px;
  /* line-height: 2; */
  /* height: 28px; */
`;
