import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gympoint.api.gabdev.com.br:3333',
});

export default api;
