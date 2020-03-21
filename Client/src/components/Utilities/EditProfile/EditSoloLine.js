// Utilities
import React, { useContext } from 'react';
import styled from 'styled-components';
import UserCont from '../../../context/user/userContext';
import AuthCont from '../../../context/auth/authContext';

// Component

import Input from '../Input';
import BoardCont from '../BoardCont';
import ButtonLight from '../ButtonLight';

// Styled Comp

const GradientCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${props => props.theme.colors.mainPurple},
    ${props => props.theme.colors.info}
  );
  padding: 0.12vw;
`;

const GradientContRadius = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${props => props.theme.colors.mainPurple},
    ${props => props.theme.colors.info}
  );
  padding: 1px;
  border-radius: 4px;
`;

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
padding: 0px;
width: 100%;
margin-right: 0%;
position: relative;

z-index: 0;
background: ${props => props.theme.colors.white};

/* border: 1px solid ${props => props.theme.colors.mainPurple}; */
`;

const SiteName = styled.h2`
  color: white;
  background: ${props => props.theme.colors.mainPurple};
  font-family: ${props => props.theme.fontFamily[5]};
  padding: 5px 10px;

  width: 100%;
`;

const ContDiv = styled.div`
  width: 100%;
  /* border: 1px solid ${props => props.theme.colors.info}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px;
`;

const InputEdit = styled(Input)`
  padding: 1px;

  margin: 0px 65px 0px 0px;
  margin: 0;
  width: 100%;
  &:focus {
    background: ${props => props.theme.colors.white};
  }
`;

const Block = styled.div`
  width: 90%;
  margin: 30px 0px 0px 0px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  background: white;
  margin-bottom: 10px;
  width: 100%;
  font-weight: light;
  padding: 0px 15px 0px 15px;
  font-family: ${props => props.theme.fontFamily[5]};
  color: ${props => props.theme.colors.mainPurple};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  padding: 0px 20px;
  font-weight: 200;
  font-family: ${props => props.theme.fontFamily[5]};
  letter-spacing: 1px;
  color: ${props => props.theme.colors.mainPurple};
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  background: ${props => props.theme.colors.white};

  /* border: 1px solid ${props => props.theme.colors.mainPurple}; */
  padding: 15px 0px;
  border-radius: 4px;
`;
const Notes = styled.p`
  width: 25%;
  border: 1px solid ${props => props.theme.colors.info};
  color: ${props => props.theme.colors.info};
  background: ${props => props.theme.colors.white};
  border-radius: 4px;
  padding: 20px;
  text-align: justify;
  margin-left: 70px;
  font-size: ${props => props.theme.fontSizes.xm};
  font-family: ${props => props.theme.fontFamily[4]};
  position: relative;
  box-shadow: 0px 0px 3px ${props => props.theme.colors.info};
`;

const Icon = styled.p`
  position: absolute;
  width: 20px;
  height: 20px;
  /* transform: translate(50%, 50%); */
  display: flex;
  align-items: center;
  justify-content: center;
  left: -20px;
  top: 10%;
  background: ${props => props.theme.colors.info};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0px 0px 3px ${props => props.theme.colors.info};

  color: white;
`;

const HeaderText = styled.h3`
  width: 150%;
  font-size: ${props => props.theme.fontSizes.small};
`;

const H4 = styled.h4`
  width: 20vw;
  font-size: ${props => props.theme.fontSizes.small};
`;

const EditSoloLine = ({ title, titleVal, onClick }) => {
  const userCont = useContext(UserCont);
  const authCont = useContext(AuthCont);
  const { user } = authCont;

  return (
    <Li>
      <H4>{title}</H4>
      {userCont.edit ? (
        <InputEdit secondary />
      ) : (
        <HeaderText>{titleVal}</HeaderText>
      )}
      {userCont.edit ? (
        <ButtonLight onClick={onClick} text='Save'></ButtonLight>
      ) : (
        <ButtonLight onClick={onClick} text='Edit'></ButtonLight>
      )}
    </Li>
  );
};

export default EditSoloLine;
