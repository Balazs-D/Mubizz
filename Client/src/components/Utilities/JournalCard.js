// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const CardWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 50vw;
  background: linear-gradient(
    ${props => props.theme.colors.mainPurple},
    ${props => props.theme.colors.gradientPink}
  );
  padding: 0.075vw;
  /* border-radius: 1vw; */
  box-shadow: 0.2vw 0.2vw 0.4vw grey;
  margin-bottom: 40px;
`;

const CardCont = styled.div`
  width: 100%;
  /* background-image: linear-gradient(lightgrey, white); */
  background: white;
  /* border-radius: 1vw; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: ${props => props.theme.fontFamily[0]};
  margin: 0;
  padding: 0%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #002a40;
  padding: 1vw 1vw;
  width: 100%;
`;

const InfoField = styled.div`
  width: 100%;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colors.basicGrey},
    ${props => props.theme.colors.basicGrey}
  );
  /* border-radius: 1vw; */
`;

const DescCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 100%;
  height: 100%;
  padding: 0;
`;

const PicStyle = styled.img`
  width: 30%;
  height: 100%;
  /* border-radius: 1vw; */
  object-fit: cover;
  margin: 0;
  opacity: 0.5;
  transition: all 0.35s;
  &:hover {
    opacity: 1;
  }
`;

const Card = ({ src, offerText, title, update, infraText }) => {
  return (
    <div>
      <CardWrapper>
        <CardCont>
          <PicStyle src={src} alt=''></PicStyle>
          <DescCont>
            <Text>
              <h3 style={{ margin: '0vw 0vw 1vw 0vw' }}>
                {update}
                {title}
              </h3>
              <h5 style={{ margin: '0' }}>Desiption in 140 characters...:</h5>
            </Text>
            <InfoField>
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0',
                  padding: '.5vw .5vw'
                }}
              >
                <h5>by Billy Bob John</h5>
                <p>*****</p>
              </span>
            </InfoField>
          </DescCont>
        </CardCont>
      </CardWrapper>
    </div>
  );
};

export default Card;
