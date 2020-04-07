// Utilities
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Components
import AuthCont from '../../../context/auth/authContext';
import UserCont from '../../../context/user/userContext';

import ButtonMain from '../ButtonMain';
import { Result } from 'express-validator';

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
    ${(props) => props.theme.colors.basicBlue},
    ${(props) => props.theme.colors.steelBlue}
  );
  box-shadow: 0px 0px 3px ${(props) => props.theme.colors.mainPurple};
  margin-top: 30px;
`;

let Img = styled.img`
  display: flex;
  justify-self: center;
  width: 200px;
  height: 200px;
`;

const PicUpload = () => {
  const authCont = useContext(AuthCont);
  const userCont = useState(UserCont);

  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'mubizzAvatar');
    setLoading(true);
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/mubizz/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className='App'>
      <h1>Upload Image</h1>
      <input
        type='file'
        name='file'
        placeholder='Upload an image'
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '300px' }} />
      )}
    </div>
  );
};

export default PicUpload;
