import Axios from 'axios';
// import { useRouter } from 'next/router';
// const router = useRouter();
// const BASE_URL = import.meta.env.VITE_BASE_URL;

const axios = Axios.create({
  baseURL: 'http://localhost:4000'
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  // eslint-disable-next-line func-names
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.status === 302) {
      // Handle the redirection here
      const redirectUrl = response.headers['location'];
      // router.push(redirectUrl); // Use the navigate function to redirect
      window.location.href = redirectUrl;
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      // router.push('/login');
      window.location.href = "/login";
    }
    throw error;
  }
);


export default axios;
