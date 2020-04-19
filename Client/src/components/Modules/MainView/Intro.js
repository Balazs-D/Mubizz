// Utilities
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Component

import EditSoloLine from '../../Utilities/EditProfile/EditSoloLine';
import EditTextArea from '../../Utilities/EditProfile/EditTextArea';
import EditTagItem from '../../Utilities/EditProfile/EditTagItem';
import EditReadLine from '../../Utilities/EditProfile/EditReadLine';
import EditAddLine from '../../Utilities/EditProfile/EditAddLine';
import PicUpload from '../../Utilities/PicUpload/PicUpload';
import ProcessDiagram from '../../Utilities/EditProfile/ProcessDiagram';
import IntroText from '../../Utilities/IntroText';
import DiagramStep from '../../Utilities/EditProfile/DiagramStep';
import EditLanguage from '../../Utilities/EditProfile/EditLanguage';

// Styled Comp

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: linear-gradient(
    ${(props) => props.theme.colors.gradientPink},
    ${(props) => props.theme.colors.gradientYellow}
  ); */
  background: ${(props) => props.theme.colors.white};
  padding-top: 00px;
  /* border-radius: 4px; */
  width: 100%;
  /* height: 100%; */
  margin-bottom: 0px;
`;

// const Form = styled.div`
//   display: flex;
// `;

const Block = styled.div`
  width: 70%;
  /* height: 160px; */
  /* margin: 00px 0px 0px 0px; */
  align-items: center;
  justify-content: flex-start;
  display: flex;
  position: relative;
  background: ${(props) => props.theme.colors.info};
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  border-radius: 3px;
  margin: 20px;
  flex-direction: column;
  position: relative;
  padding: 30px 10px 10px 10px;
`;

const Title = styled.h4`
  /* color: ${(props) => props.theme.colors.mainPurple}; */
  padding: 5px 15px;
  border-left: 1px solid ${(props) => props.theme.colors.mainPurple};
border-right: 1px solid ${(props) => props.theme.colors.mainPurple};
  border-bottom: 1px solid ${(props) => props.theme.colors.mainPurple};
color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.basicBlue};
  font-family: ${(props) => props.theme.fontFamily[5]};
  font-size: ${(props) => props.theme.fontSizes.small};
  text-transform: uppercase;
  letter-spacing: 1px;

  border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

  position: absolute;
  top: 0px;
  left: 20px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  /* padding: 0px 0px; */
  /* margin-top: 0px; */
  font-weight: 100;
  font-family: ${(props) => props.theme.fontFamily[4]};
  letter-spacing: 1px;
    /* list-style-type: disc; */
    /* list-style-position: inside; */
   /* position: absolute; */
   /* bottom: 0px;
   left: 10px; */
   padding: 10px 10px 0px 10px;
/* border-right: 1px solid ${(props) => props.theme.colors.mainPurple};
  border-top: 1px solid ${(props) => props.theme.colors.mainPurple}; */
  /* background: ${(props) => props.theme.colors.info};
   border: 1px solid ${(props) => props.theme.colors.mainPurple};
       border-radius: 3px; */


  /* border-top-left-radius: 3px;
    border-top-right-radius: 3px; */
    margin-top: 10px;
    

  /* color: ${(props) => props.theme.colors.white}; */
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  width: 100%;
  height: 100%;
  margin-top: 0px;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.white},
    ${(props) => props.theme.colors.white}
  );
  padding: 15px 0px;
`;

const Row = styled.li`
  width: 100%;
  /* display: list-item; */
  justify-content: flex-start;
  padding: 5px 10px;
  flex-direction: row;
  color: ${(props) => props.theme.colors.basicBlue};
  background: ${(props) => props.theme.colors.basicGrey};
  border-left: 3px solid ${(props) => props.theme.colors.gradientYellow};
  /* border-radius: 3px; */
  margin-bottom: 10px;
  font-size: ${props=>props.theme.fontSizes.small}
`;

const SiteName = styled.h2`
  color: white;
  background: ${(props) => props.theme.colors.basicBlue};
  font-family: ${(props) => props.theme.fontFamily[5]};
  padding: 5px 10px;
  letter-spacing: 1px;
    margin-bottom: 30px;
  width: 100%;
`;

const OfferManagement = (props) => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);

  useEffect(() => {
    window.scrollTo(0, 0);
    // setUser({ ...user, languages: '' });
    // setUser({ ...user, selectedSkills: '' });
    // setUser({ ...user, selectedTags: '' });
    // console.log('USe Effect get profile ');
    // authCont.getProfile();
  }, []);

  return (
    <Form>
      <SiteName>Your first steps...</SiteName>

      <Block>
        <Title>Update your profile!</Title>
        <Ul>
          <Row>Update your profile with professional information.</Row>
          <Row>Add reference works and jobs to show your qualification.</Row>
          <Row>Create any service offer.</Row>
        </Ul>
      </Block>
      <Block>
        <Title>Find services!</Title>
        <Ul>
          <Row>Find the partner for your need.</Row>
          <Row>Use our filters for a specific selection.</Row>
          <Row>Browse the members and get all work related information.</Row>
        </Ul>
      </Block>
      <Block>
        <Title>Grow your Network!</Title>
        <Ul>
          <Row>Contact user and start a chat.</Row>
          <Row>Discuss how needs and offer matches.</Row>
          <Row>Make a partnership.</Row>
        </Ul>
      </Block>
    </Form>
  );
};

export default OfferManagement;
