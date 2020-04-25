// Utilities
import React, { useContext } from 'react';
import styled from 'styled-components';
import authContext from '../../context/auth/authContext';

// Styled Components

const CardCont = styled.div`
  width: 100%;
  height: 100%;
  /* background-image: linear-gradient(lightgrey, white); */
  background: ${(props) => props.theme.colors.white};
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily[0]};
  transition: all 0.35s ease-in;

  /* padding: 3%; */
`;

const Li = styled.li`
  display: flex;
  font-family: ${(props) => props.theme.fontFamily[4]};
  color: ${(props) => props.theme.colors.basicBlue};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${(props) => props.theme.colors.basicBlue};
  font-family: ${(props) => props.theme.fontFamily[4]};
  margin-top: 0px;
  /* padding: 0px 0px 0px 10px; */

  width: 90%;
`;

const InfoField = styled.div`
  width: 100%;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.basicGrey},
    ${(props) => props.theme.colors.basicGrey}
  );
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 3px;
`;

const IconSpan = styled.div`
  padding-right: 10px;
  color: ${(props) => props.theme.colors.lightGrey};
  transition: all 0.35s;
  display: flex;
`;

const ICont = styled.div`
  display: flex;
  flex-direction: row;
  margin: 7px;

  &:hover {
    color: ${(props) => props.theme.colors.darkGrey};
  }
`;

const PicCont = styled.div`
  width: 30%;
  height: 100%;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  overflow: hidden;
`;

const PicStyle = styled.img`
  /* width: 30%;
  height: 100%;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  opacity: 0.8;
  transition: all 0.35s ease-in;
`;

const DropdownCont = styled.div`
  position: relative;
  display: inline-block;

  &:hover .DropContent {
    display: block;
  }
`;

const DropdownContent = styled.ul`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  border: 1px solid ${(props) => props.theme.colors.basicBlue};
  border-radius: 3px;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.mainPurple};
  background: ${(props) => props.theme.colors.primaryLight};
  /* border-top-left-radius: 3px;
  border-top-right-radius: 3px; */
  width: 100%;
  padding-left: 5px;
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  box-shadow: 0px 0px 0px 2px ${(props) => props.theme.colors.white};
  border-radius: 3px;
  letter-spacing: 1px;
  margin: -35px 0vw 10px 0vw;
  transition: all 0.35s ease-in;
  transition-delay: 0.2s;
  position: relative;
  z-index: 1000;
`;

const SubTit = styled.h3`
  color: ${(props) => props.theme.colors.mainPurple};
  background: ${(props) => props.theme.colors.white};
  /* border-top-left-radius: 3px;
  border-top-right-radius: 3px; */
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: -5px;
  width: 100%;
  padding: 5px 5px;
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  border-radius: 3px;
  transition: all 0.35s ease-in;
  transition-delay: 0.28s;
  position: relative;
  z-index: 1000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;

  /* margin: -20px 0vw 10px 0vw; */
`;

const About = styled.p`
  height: 60px;
  font-size: ${(props) => props.theme.fontSizes.small};
  padding-left: 5px;
  border-left: 2px solid ${(props) => props.theme.colors.mainPurple};

  margin: 10px 0px 25px 0px;
`;

const Pa = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-left: 0px;
  font-weight: 100;
`;

const InfoSpan = styled.span``;

const InfoName = styled.a`
  color: ${(props) => props.theme.colors.mainPurple};
  text-decoration: none;
  margin-left: 10px;
  font-family: ${(props) => props.theme.fontFamily[4]};
`;

const TextCont = styled.div`
width: 70%`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fontFamily[4]};
  /* margin: 10px 0px; */
  position: absolute;
  left: 50px;
  transform: translateX(-50%);
  top: -10px;
  border: 1px solid ${(props) => props.theme.colors.info};
  background: ${(props) => props.theme.colors.gradientPink};
  box-shadow: 0px 0px 1px 2px ${(props) => props.theme.colors.white};
  padding: 1px 15px;
  border-radius: 3px;
  opacity: 1;
  z-index: 1000;
  transition: all 0.35s ease-in;
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

    width: 40vw;
  height: 20vh;
  background: linear-gradient(
    ${(props) => props.theme.colors.info},
    ${(props) => props.theme.colors.secondaryDecent}
  );
  padding: 1px;
  border-radius: 3px;
  /* box-shadow: 0vw 0vw 0.4vw ${(props) => props.theme.colors.darkTwo}; */
  margin: 20px 0px;
  transition: background 0.35s ease-in .15s;
  transition: box-shadow 0.35s ease-in;

  &:hover {
    background: linear-gradient(
      ${(props) => props.theme.colors.gradientYellow},
      ${(props) => props.theme.colors.gradientPink}
    );
    box-shadow: 0vw 0vw 0.4vw ${(props) => props.theme.colors.darkOne};
  }

  /* &:hover ${CardCont} {
    background: ${(props) => props.theme.colors.infoLight};
  } */
  &:hover ${PicStyle} {
    opacity: 1;
    transform: scale(1.1);
  }



  &:hover ${SubTit} {
        box-shadow: 0vw 0vw 0.2vw ${(props) => props.theme.colors.primaryDark};
  }

  

  &:hover ${Label} {

      border: 1px solid ${(props) => props.theme.colors.mainPurple};
  }
`;
const Card = ({ src, name, offerText, offer, reference, title, notes, link, label }) => {
  const authCont = useContext(authContext);

  return (
    <div>
      <CardWrapper>
        <CardCont>
          <Label>{label}</Label>
          <PicCont>
            <PicStyle src={src} alt=''></PicStyle>
          </PicCont>
          <TextCont>
            <Text>
            <Title>{title}</Title>
            <About>{notes}</About>
            <Pa>{offerText}</Pa>
            <SubTit>
              <Pa>{offer}</Pa>
              <Pa>{reference}</Pa>
            </SubTit>
          </Text>
          <InfoField>
            <InfoSpan>
              <InfoName>{name}</InfoName>
            </InfoSpan>
            <IconSpan>
             
              <DropdownCont>
                <ICont>
                  <i className='fas fa-external-link-alt'></i>
                </ICont>
                <DropdownContent className='DropContent'>
                  <Li>
                    <a href={link}>{link}</a>
                  </Li>
                </DropdownContent>
              </DropdownCont>
             
            </IconSpan>
          </InfoField>
          </TextCont>
        </CardCont>
      </CardWrapper>
    </div>
  );
};

export default Card;
