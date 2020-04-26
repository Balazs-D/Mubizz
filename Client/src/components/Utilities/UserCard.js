// Utilities
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import authContext from '../../context/auth/authContext';

// Styled Components

const CardCont = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.white},
    ${(props) => props.theme.colors.white}
  );
  /* background: ${(props) => props.theme.colors.white}; */
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

const PicCont = styled.div`
  width: 30%;
  height: 100%;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
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

const TextCont = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;

  padding-left: 5px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fontFamily[4]};
  margin-bottom: 5px;
  border: 1px solid ${(props) => props.theme.colors.info};
  background: ${(props) => props.theme.colors.gradientPink};
  box-shadow: 0px 0px 1px 2px ${(props) => props.theme.colors.white};
  padding: 1px 15px;
  border-radius: 3px;
  opacity: 1;
  z-index: 1000;
  transition: all 0.35s ease-in;
`;

const Name = styled.h2`
  width: 100%;
  padding: 5px;
  /* background: ${(props) => props.theme.colors.info}; */
  color: ${(props) => props.theme.colors.mainPurple};
`;

const Motto = styled.p`
  width: 70%;
  color: ${(props) => props.theme.colors.mainPurple};
  background: ${(props) => props.theme.colors.primaryLight};
  margin: 2px;
  padding: 5px;
  margin: 3px 0px;

  font-size: ${(props) => props.theme.fontSizes.small};
`;

const Location = styled.div`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.basicBlue};
  display: flex;
  justify-content: flex-end;
  font-size: ${(props) => props.theme.fontSizes.xm};
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  padding: 2px;
`;

const CardsCont = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardSpan = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: ${(props) => props.theme.fontSizes.xm};
  margin-right: 5px;
`;

const Num = styled.p`
  padding: 2px;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
`;

const NumText = styled.p`
  padding: 2px 5px;
  border-top: 1px solid ${(props) => props.theme.colors.info};
  border-bottom: 1px solid ${(props) => props.theme.colors.info};
  border-right: 1px solid ${(props) => props.theme.colors.info};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;
const TagText = styled.p`
  padding: 2px 5px;

  border: 1px solid ${(props) => props.theme.colors.info};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const Tag = styled(Num)`
  font-size: ${(props) => props.theme.fontSizes.xm};
  margin-right: 0px;
  margin-right: 3px;
`;

const ServiceDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.xm};
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

    width: 35vw;
  height: 20vh;
  background: linear-gradient(
    ${(props) => props.theme.colors.info},
    ${(props) => props.theme.colors.secondaryDecent}
  );
  padding: 1px;
  border-radius: 3px;
    box-shadow: 0vw 0vw 0.4vw ${(props) => props.theme.colors.white};
  margin: 20px 0px;
  transition: background 0.35s ease-in .15s;
  transition: box-shadow 0.35s ease-in;
transition: transform 0.35s ease-in;
  &:hover {
    background: linear-gradient(
      ${(props) => props.theme.colors.gradientYellow},
      ${(props) => props.theme.colors.gradientPink}
    );
    box-shadow: 0vw 0vw 0.4vw ${(props) => props.theme.colors.darkOne};
        transform: scale(1.05);

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
const Card = ({
  label,
  src,
  name,
  motto,
  services,
  reference,
  offer,
  location,
  onClick,
  value
}) => {
  const authCont = useContext(authContext);
  console.log(Object.keys(services));
  console.log(services);
  const [actualArray, setActualArray] = useState(
    Object.keys(services).map((serv, i) => services[serv])
  );
  console.log(actualArray);
  console.log(Object.keys(services).map((serv, i) => services[serv]));

  return (
    <div>
      <CardWrapper onClick={onClick} value={value}>
        <CardCont>
          <TextCont>
            {/* <Name>{name}</Name> */}
            <Label>{name}</Label>
            <Row>
              <ServiceDisplay>
                {Object.keys(services).map((serv, i) => (
                  <Tag>{services[serv]}</Tag>
                ))}
              </ServiceDisplay>
            </Row>

            <Motto>{motto}</Motto>
            <CardsCont>
              <CardSpan>
                <TagText>{offer}</TagText>
                <NumText>offers</NumText>
              </CardSpan>
              <CardSpan>
                <TagText>{reference}</TagText>
                <NumText>references</NumText>
              </CardSpan>
              <Location>{location}</Location>
            </CardsCont>
          </TextCont>
          <PicCont>
            <PicStyle src={src} alt=''></PicStyle>
          </PicCont>
        </CardCont>
      </CardWrapper>
    </div>
  );
};

export default Card;
