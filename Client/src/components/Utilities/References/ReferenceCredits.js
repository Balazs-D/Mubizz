// Utilities
import React, { useEffect, useState, useContext, Fragment } from 'react';
import styled from 'styled-components';

// Component

import InputMinimal from '../InputMinimal';
import ButtonLight from '../ButtonLight';
import AddLineComponent from '../EditProfile/AddLineComponent';
import AlertCont from '../../../context/alert/alertContext';
import AuthCont from '../../../context/auth/authContext';
import Alert from '../../Modules/Alerts';

// Styled Comp

const InputEdit = styled(InputMinimal)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px;
  font-size: ${(props) => props.theme.fontSizes.xm};
  width: 55%;
  background: transparent;
  padding: 3px 6px;
  align-items: center;
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid
    ${(props) =>
      props.checked ? props.theme.colors.mainPurple : props.theme.colors.info};
  color: ${(props) => props.theme.colors.mainPurple};
`;

const ButtonC = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 15px;
  height: 15px;
  border-radius: 50%;
  /* font-size: 10px; */
  font-family: sans-serif;
  text-decoration: none;
  background: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.colors.mainPurple};
  color: ${(props) => props.theme.colors.mainPurple};
  text-align: center;
  position: absolute;
  top: 0px;
  transition: all 0.35s;
  z-index: 0;
  outline: none;

  &:hover {
    background: ${(props) => props.theme.colors.warning};
    border: ${(props) => props.theme.colors.mainPurple};

    color: ${(props) => props.theme.colors.primaryDark};
  }
  &:active {
    background: ${(props) => props.theme.colors.info};
    color: ${(props) => props.theme.colors.primaryDark};
  }
`;

const ConfButton = styled(InputEdit)`
  width: 10%;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  padding: 20px 10px 10px 10px;
`;

const Li = styled.li`
  width: 95%;
    padding: 0px;
      margin: 20px;
      position: relative;



  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 95%;
  margin: 20px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.info}; */
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  position: relative;
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.info};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const Icon = styled.i`
  transition: all 0.3s ease-in;
`;

const AddButton = styled(ButtonLight).attrs({ type: 'button' })`
  /* position: absolute; */
  transition: all 0.3s ease-in;
  bottom: 20%;
  right: 2%;
  background: white;

  &:hover {
    background: ${(props) => props.theme.colors.info};
    border: 1px solid ${(props) => props.theme.colors.mainPurple};
  }
`;

const SkillLi = styled.div.attrs({
  add: true,
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px;
  font-size: ${(props) => props.theme.fontSizes.xm};
  width: 49%;
  background: ${(props) => props.theme.colors.white};
  padding: 3px 6px;
  align-items: center;
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid
    ${(props) =>
      props.checked ? props.theme.colors.mainPurple : props.theme.colors.info};
  color: ${(props) => props.theme.colors.mainPurple};

  &:hover {
    background: ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.white};
  }

  &:hover ${Icon} {
    color: ${(props) => props.theme.colors.white};
  }
`;

const H4 = styled.h4`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-bottom: 10px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.mainPurple};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 10px 0px;
  position: absolute;
  left: 4%;
  top: -20px;
  border: 1px solid ${(props) => props.theme.colors.info};
  background: white;
  padding: 1px 4px;
  border-radius: 3px;
`;


const ReferenceCredits = ({ placeholder, label }) => {
  const authCont = useContext(AuthCont);
  const alertCont = useContext(AlertCont);


  const [credit, setCredit] = useState({});
 

  const [creditsArray, setCreditsArray] = useState({


    // youtube: `${authCont.profile.youtube}`,
    // twitter: `${authCont.profile.twitter}`,
    // facebook: `${authCont.profile.facebook}`,
    // linkedin: `${authCont.profile.linkedin}`,
    // instagram: `${authCont.profile.instagram}`,
    // discogs: `${authCont.profile.discogs}`,
    // bandcamp: `${authCont.profile.bandcamp}`,
    // soundcloud: `${authCont.profile.soundcloud}`,
  });

//   const [localSocial, setLocalSocial] = useState([authCont.social]);

  const handleChangeName = (e) => {
    setCredit({ ...credit, [e.target.name]: e.target.value });

    console.log(credit);
  };

  useEffect(() => {
    authCont.addCredit(creditsArray);
  }, [creditsArray]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (credit.name === '' || credit.url === '') {
      alertCont.setAlert('Please fill all fields.');
    } else {
      setCreditsArray({ ...creditsArray, credit })

      // authCont.addCredit(creditsArray);
      // setCredit('');
    }
  };

  return (
    <Li>
      <Label>{label}</Label>

      <Cont>
        <Col>
          <Row>
            <P>name</P>
            <InputEdit
              placeholder={placeholder}
              value={''}
              // onChange={(e) => setLink(e.target.value)}
              type='text'
              name='name'
              onChange={(e) => handleChangeName(e)}
            ></InputEdit>
          </Row>
          <Row>
            <P>url</P>
            <InputEdit
              placeholder={placeholder}
              value={''}
              // onChange={(e) => setLink(e.target.value)}
              type='text'
              name='url'
              onChange={(e) => handleChangeName(e)}
            ></InputEdit>
          </Row>
        </Col>
        <Alert />

        <AddButton onClick={handleButtonClick} text='+' />
      </Cont>

      
    </Li>
  );
};

export default ReferenceCredits;
