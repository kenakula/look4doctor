import { BASE_DIRECTUS_PATH } from 'app/shared/assets';
import axios from 'axios';

export const axiosInstance = axios.create({
  timeout: 5000,
  baseURL: BASE_DIRECTUS_PATH,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
