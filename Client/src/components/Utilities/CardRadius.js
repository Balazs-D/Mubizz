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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily[0]};
  transition: all 0.35s ease-in;

  /* padding: 3%; */
`;

const Li = styled.li`
display: flex;`;

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

const PicStyle = styled.img`
  width: 100%;
  height: 15vh;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

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

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fontFamily[4]};
  margin: 10px 0px;
  position: absolute;
  left: 15px;
  /* transform: translateX(-50%); */
  top: -20px;
  border: 1px solid ${(props) => props.theme.colors.info};
  background: ${(props) => props.theme.colors.gradientPink};
  padding: 1px 15px;
  border-radius: 3px;
  opacity: 1;
  z-index: 1000;
  transition: all 0.35s ease-in;
`;

const CardWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 20vw;
  height: 50vh;
  background: linear-gradient(
    ${(props) => props.theme.colors.info},
    ${(props) => props.theme.colors.secondaryDecent}
  );
  padding: 1px;
  border-radius: 3px;
  /* box-shadow: 0vw 0vw 0.4vw ${(props) => props.theme.colors.darkTwo}; */
  margin: 20px 40px;
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
  }



  &:hover ${SubTit} {
        box-shadow: 0vw 0vw 0.2vw ${(props) => props.theme.colors.darkOne};
  }

  &:hover ${Label} {

      border: 1px solid ${(props) => props.theme.colors.gradientYellow};
  }
`;
const Card = ({
  src,
  name,
  offerText,
  includesOne,
  includesTwo,
  title,
  notes,
}) => {
  const authCont = useContext(authContext);

  return (
    <div>
      <CardWrapper>
        <CardCont>
          <Label>Service Offer</Label>
          <PicStyle src={src} alt=''></PicStyle>

          <Text>
            <Title>{title}</Title>
            <About>{notes}</About>
            <Pa>{offerText}</Pa>
            <SubTit>
              Offer includes:
              <Pa>Hard Code</Pa>
              <Pa>Hard Code Two</Pa>
            </SubTit>
          </Text>
          <InfoField>
            <InfoSpan>
              <InfoName>{name}</InfoName>
            </InfoSpan>
            <IconSpan>
              {/* <ICont>
                <i class='fas fa-marker'></i>
              </ICont> */}
              <DropdownCont>
                <ICont>
                  <i class='fas fa-external-link-alt'></i>
                </ICont>
                <DropdownContent className='DropContent'>
                  <Li>Link 1</Li>
                  <Li>Link 2</Li>
                  <Li>Link 3</Li>
                </DropdownContent>
              </DropdownCont>
              {/* <DropdownCont>
                <ICont>
                  {' '}
                  <i class='fas fa-users'></i>
                </ICont>

                <DropdownContent className='DropContent'>
                  TEXT 2 (Later map() through corresponding array)
                </DropdownContent>
              </DropdownCont> */}
            </IconSpan>
          </InfoField>
        </CardCont>
      </CardWrapper>
    </div>
  );
};

export default Card;
