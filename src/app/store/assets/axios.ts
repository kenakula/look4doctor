import axios from 'axios';

export const axiosInstance = axios.create({
  timeout: 5000,
  baseURL: 'https://asw9h040.directus.app/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
