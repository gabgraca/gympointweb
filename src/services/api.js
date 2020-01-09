import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gympoint.api.gabdev.com.br:3334',
});

export default api;
