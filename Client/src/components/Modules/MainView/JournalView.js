// Utilities
import React from 'react';
import styled from 'styled-components';
import bg1 from '../../../graphics/processed/bg2.jpg';
import bg2 from '../../../graphics/processed/bg3.jpg';
import bg3 from '../../../graphics/processed/bg4.jpg';
import bg4 from '../../../graphics/processed/bg01.jpg';

// Component
import JournalCard from '../../Utilities/JournalCard';

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

const SearchView = () => {
  return (
    <Main>
      <JournalCard src={bg1} update='New Offer: ' title='Digital Mixing' />
    </Main>
  );
};

export default SearchView;
