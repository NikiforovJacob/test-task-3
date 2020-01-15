import { apiUrl } from './base/axios';
import {
  get,
  post,
  put,
  del,
} from './base';

export default {
  get: () => get(`${apiUrl}/trainings`),
  add: (body) => post(`${apiUrl}/trainings`, body),
  edit: (body) => put(`${apiUrl}/trainings/`, body),
  delete: (id) => del(`${apiUrl}/trainings/${id}`),
};
