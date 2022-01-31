import axios from 'axios';
import { BACKEND_URL } from '../constants/backend';

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30_000
});

export default api;