import Axios from 'axios';

const dev = process.env.NODE_ENV === 'development';
const API_HOST = dev ? 'http://localhost:3600' : process.env.API_HOST;
const HOST = dev ? 'http://localhost:3030' : process.env.HOST;

export const srcImg = uri => `${API_HOST}/${uri}`;
export const srcHst = (uri = '') => `${HOST}/${uri}`;

export default () => (Axios.defaults.baseURL = API_HOST);
