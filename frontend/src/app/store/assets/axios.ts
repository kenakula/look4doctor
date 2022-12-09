import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SANITY_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
