// Utilities
import React from 'react';
import styled from 'styled-components';

// Styled Components

const CardWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 20vw;
  background: linear-gradient(
    ${props => props.theme.colors.mainPurple},
    ${props => props.theme.colors.gradientPink}
  );
  padding: 0.075vw;
  /* border-radius: 1vw; */
  box-shadow: 0.15vw 0.2vw 0.4vw grey;
  margin-bottom: 40px;
`;

const CardCont = styled.div`
  width: 100%;
  /* background-image: linear-gradient(lightgrey, white); */
  background: white;
  /* border-radius: 1vw; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: ${props => props.theme.fontFamily[0]};

  /* padding: 3%; */
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #002a40;
  padding: 1vw 1vw;
`;

const InfoField = styled.div`
  width: 100%;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colors.basicGrey},
    ${props => props.theme.colors.basicGrey}
  );
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border-radius: 1vw; */
`;

const IconSpan = styled.div`
  padding-right: 10px;
  color: ${props => props.theme.colors.lightGrey};
  transition: all 0.35s;
  display: flex;
`;

const ICont = styled.div`
  display: flex;
  flex-direction: row;
  margin: 7px;

  &:hover {
    color: ${props => props.theme.colors.darkGrey};
  }
`;

const PicStyle = styled.img`
  width: 100%;
  height: 15vh;
  /* border-radius: 1vw; */
  object-fit: cover;
  margin: 0;
  opacity: 0.5;
  transition: all 0.35s;
  &:hover {
    opacity: 1;
  }
`;

const DropdownCont = styled.div`
  position: relative;
  display: inline-block;

  &:hover .DropContent {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;

const Card = ({ src, offerText, infraText }) => {
  return (
    <div>
      <CardWrapper>
        <CardCont>
          <PicStyle src={src} alt=''></PicStyle>

          <Text>
            <h3 style={{ margin: '0vw 0vw 1vw 0vw' }}>
              Live Recording Specialist
            </h3>
            <h5 style={{ margin: '0' }}>About Offer:</h5>
            <p style={{ margin: '0vw 0vw .5vw 0vw' }}>{offerText}</p>
            <h5 style={{ margin: '0' }}>Infrastructure:</h5>
            <p style={{ margin: '0' }}>{infraText}</p>
            <p style={{ margin: '0' }}>{infraText}</p>
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
              {' '}
              <h5>by Billy Bob John</h5>
              <p>*****</p>
            </span>
            <IconSpan>
              <ICont>
                <i class='fas fa-marker'></i>
              </ICont>
              <DropdownCont>
                <ICont>
                  <i class='fas fa-external-link-alt'></i>
                </ICont>
                <DropdownContent className='DropContent'>
                  TEXT (Later map() through corresponding array)
                </DropdownContent>
              </DropdownCont>
              <DropdownCont>
                <ICont>
                  {' '}
                  <i class='fas fa-users'></i>
                </ICont>

                <DropdownContent className='DropContent'>
                  TEXT 2 (Later map() through corresponding array)
                </DropdownContent>
              </DropdownCont>
            </IconSpan>
          </InfoField>
        </CardCont>
      </CardWrapper>
    </div>
  );
};

export default Card;
