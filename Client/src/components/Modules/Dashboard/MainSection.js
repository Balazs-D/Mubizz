// Utilities
import React from 'react';
import styled from 'styled-components';

// Component

// Styled Comp

const Main = styled.div`
width: 70%;
height: 20vh;
margin-right: 5%;
border: 1px solid ${props => props.theme.colors.mainPurple};
`

const MainSection=()=> {
    return (
        <Main>
            <h2>Search result, cards......</h2>
        </Main>
    )
};

export default MainSection
