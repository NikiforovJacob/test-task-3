import axios, { defaultParams } from './axios';

export default (url, body, params = { ...defaultParams }) => axios.put(url, body, params);
