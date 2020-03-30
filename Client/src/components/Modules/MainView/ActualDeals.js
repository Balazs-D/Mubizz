// Utilities
import React from 'react';
import styled from 'styled-components';

// Component

// Styled Comp

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
padding: 5px;
width: 100%;
margin-right: 5%;
position: relative;
z-index: 0;

/* border: 1px solid ${props => props.theme.colors.mainPurple}; */
`;

const SiteName = styled.h4`
  color: white;
  background: ${props => props.theme.colors.mainLightBlue};
  font-family: ${props => props.theme.fontFamily[0]};
  padding: 5px 10px;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.mainPurple};
  border-right: 1px solid ${props => props.theme.colors.mainPurple};
  border-left: 1px solid ${props => props.theme.colors.mainPurple};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ContDiv = styled.div`
  width: 100%;
  height: 30vh;
  border-bottom: 1px solid ${props => props.theme.colors.mainPurple};
  border-right: 1px solid ${props => props.theme.colors.mainPurple};
  border-left: 1px solid ${props => props.theme.colors.mainPurple};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;


const ActualDeals = () => {
  return (
    <Main>
      <SiteName>Actual Deals</SiteName>
      <ContDiv></ContDiv>
    </Main>
  );
};

export default ActualDeals;
