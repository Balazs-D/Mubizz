// Utilities
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';
import axios from 'axios';

// Component

import UserCard from '../../Utilities/UserCard';

// Styled Comp

const GradientContRadius = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.mainPurple},
    ${(props) => props.theme.colors.mainPurple}
  );
  padding: 1px;
  /* border-radius: 4px; */
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

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

  width: 100%;
`;

const SearchView = (props) => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <GradientContRadius>
      <Col>
        <Form>
          <SiteName>Offer Manager</SiteName>
          {authCont.fetchedProfiles &&
            authCont.fetchedProfiles.map((item, i) => {
              let offerMatch = authCont.fetchedOffers.filter(
                (offer, i) => offer.user === item.user
              );
              let referenceMatch = authCont.fetchedReferences.filter(
                (reference, i) => reference.user === item.user
              );

              console.log(
                item.profileName,
                offerMatch.length,
                referenceMatch.length
              );

              console.log(item.services)

              return (
                <UserCard
                  key={i}
                  label='Profile'
                  src={item.avatar}
                  offers={offerMatch.length}
                  references={referenceMatch.length}
                  name={item.profileName ? item.profileName : 'User'}
                  motto={item.profileMotto}
                  services={item.services}
                  location={item.location}
                  reference={referenceMatch.length}
                  offer={offerMatch.length}

                  
                />
              );
            })}
        </Form>
      </Col>
    </GradientContRadius>
  );
};

export default SearchView;
