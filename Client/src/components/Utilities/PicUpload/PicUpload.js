// Utilities
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Components
import AuthCont from '../../../context/auth/authContext';

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
    <div>
      <input type='file' onChange={fileSelectHandler} />
      {user && <img src={selectedFile} alt=''></img>}
      <button onClick={uploadPic} >Upload</button>
    </div>
  );
};

export default PicUpload;
