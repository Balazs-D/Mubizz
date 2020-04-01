import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    console.log('token yes')
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    console.log('token no')
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
