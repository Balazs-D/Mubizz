// Utilities
import React, {useContext} from 'react';
import styled from 'styled-components';
import bg1 from '../../../graphics/processed/bg2.jpg';
import bg2 from '../../../graphics/processed/bg3.jpg';
import bg3 from '../../../graphics/processed/bg4.jpg';
import bg4 from '../../../graphics/processed/bg01.jpg';
import userContext from '../../../context/user/userContext';

// Component
import Card from '../../Utilities/CardRadius';

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
  const userCont = useContext(userContext);

  return (
    <Main>

   {/* {userCont.userArray && userCont.userArray.map((user, i) => {

     return ( <Card key={i}>{user.firstName}</Card>)
   })} */}

      <Card src={bg1} />
      <Card src={bg2} />
      <Card src={bg3} />
      <Card src={bg4} />
      <Card />
      <Card />
    </Main>
  );
};

export default SearchView;
