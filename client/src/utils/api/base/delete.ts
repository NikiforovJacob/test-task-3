import axios, { defaultParams } from './axios';

export default (url, body, params = { ...defaultParams }) => axios.delete(url, body, params);
