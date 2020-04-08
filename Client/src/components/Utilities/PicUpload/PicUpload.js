// Utilities
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Components
import AuthCont from '../../../context/auth/authContext';
import UserCont from '../../../context/user/userContext';
import avatar from '../../../graphics/avatar.png';
import ButtonMain from '../ButtonMain';

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  /* height: 200px; */
  margin: 20px;
  border: 1px solid ${(props) => props.theme.colors.info};
  border-radius: 3px;
  padding: 10px;
  background-image: radial-gradient(
    ${(props) => props.theme.colors.secondaryDecent},
    ${(props) => props.theme.colors.white}
  );
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
  width: 100%;
  /* height: 200px; */
  /* background-image: linear-gradient(
    ${(props) => props.theme.colors.basicBlue},
    ${(props) => props.theme.colors.steelBlue}
  ); */
  box-shadow: 0px 0px 1px ${(props) => props.theme.colors.mainPurple};

    position: relative;


`;

let Img = styled.img`
  display: flex;
  justify-self: center;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border: none;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  box-shadow: 0px 0px 2px ${(props) => props.theme.colors.steelBlue};
`;

const Input = styled.input.attrs({ type: 'file' })`
  
    /* position: absolute;

    right: 2px;
    top: 1px; */
    padding: 0px;
    width: 100%;
    margin-top: 10px;
    background: ${(props) => props.theme.colors.info};
    border: 1px solid ${(props) => props.theme.colors.mainPurple};
    outline: none;
  
`;

const ButtonMainAbs = styled(ButtonMain)`
  position: absolute;
  margin: 4px;
`;

const PicUpload = () => {
  const authCont = useContext(AuthCont);
  const userCont = useContext(UserCont);

  const [image, setImage] = useState(avatar);
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
    console.log(file.secure_url);
  };

  useEffect(() => {
        userCont.updateImageState(image);

  }, [image])

  console.log(loading);

  return (
    <Cont>
      <ImgWrap>
        {/* <ButtonMainAbs>Pick file</ButtonMainAbs> */}

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <Img
            src={authCont.profile.avatar ? authCont.profile.avatar : avatar}
          />
        )}
        <Input
          type='file'
          name='file'
          text='Edit'
          onChange={uploadImage}
          // style={{ display: 'none' }}
        />
      </ImgWrap>
    </Cont>
  );
};

export default PicUpload;
