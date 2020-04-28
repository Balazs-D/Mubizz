// Utilities
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';
import axios from 'axios';

// Component

import Card from '../../Utilities/CardRadius';

// Styled Comp

const GradientContRadius = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.basicBlue},
    ${(props) => props.theme.colors.basicBlue}
  );
  padding: 0px;
  /* border-radius: 4px; */
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  padding: 0px 0px;
`;

const SiteName = styled.h2`
  color: white;
  background: ${(props) => props.theme.colors.basicBlue};
  font-family: ${(props) => props.theme.fontFamily[5]};
  padding: 5px 10px;
  margin-bottom: 30px;
  width: 100%;
`;

const SearchView = (props) => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = async (e, input) => {
    e.preventDefault();
    let id = input;
    console.log(input);
    await authCont.getSelectedProfile(id);
    await authCont.getFetchedReferences();
    await props.history.push('/dashboard/profile-view');

  };

  return (
    <GradientContRadius>
      <Col>
        <Form>
          <SiteName>Filtered search result</SiteName>
          {authCont.fetchedOffers &&
            authCont.fetchedOffers.map((item, i) => {
              let userMatch = authCont.fetchedProfiles.filter(
                (offer, i) => offer.user === item.user
              );

              console.log(userMatch);
              return (
                <Card
                  key={i}
                  title={item.title}
                  src={userMatch[0].avatar}
                  name={userMatch[0].profileName}
                  notes={item.description}
                  incOne={item.includes[0]}
                  incTwo={item.includes[1]}
                  link={item.links[0]}
                  onClick={(e)=>handleClick(e, item.user)}
                />
              );
            })}
        </Form>
      </Col>
    </GradientContRadius>
  );
};

export default SearchView;
