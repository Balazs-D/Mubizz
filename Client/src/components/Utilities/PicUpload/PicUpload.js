// Utilities
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Components
import AuthCont from '../../../context/auth/authContext';
import ButtonMain from '../ButtonMain';

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ButtonCont = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  margin: 20px;
`;

const ImgWrap = styled.div`
  width: 70%;
  height: 100%;
  padding: 1px;
  background-image: linear-gradient(
    ${props => props.theme.colors.basicBlue},
    ${props => props.theme.colors.steelBlue}
  );
  box-shadow: 0px 0px 3px ${props=>props.theme.colors.mainPurple};
  margin-top: 30px;
`;

let Img = styled.img`
display: flex;
justify-self: center;
width: 100%;`




const PicUpload = () => {
  const authCont = useContext(AuthCont);
  const { uploadImg, user } = authCont;
  const avatar = user.avatar;
  const [selectedFile, setSelectedFile] = useState(avatar);



   let fileSelectHandler = e => {
     setSelectedFile({ selectedFile: e.target.files[0] });
     console.log(selectedFile);
   };
   
   const uploadPic = e => {
     e.preventDefault();
     console.log('upload Pic');
    //  if (name === '' || email === '' || password === '') {
    //    setAlert('Please enter all fields', 'danger');
    //    console.log('error 02');
    //  } else {
     setSelectedFile({ selectedFile: e.target.files[0] });
     
     console.log(authCont);
   };

 

  return (
    <Cont>
      <ButtonCont>
        <input type='file' onChange={fileSelectHandler}></input>
        <ButtonMain text='Upload' onClick={uploadPic} />
      </ButtonCont>
      {user && (
        <ImgWrap>
          <Img src={selectedFile} alt=''></Img>
        </ImgWrap>
      )}
    </Cont>
  );
};

export default PicUpload;
