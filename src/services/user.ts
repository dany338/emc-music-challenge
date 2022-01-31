import api from './api';
import { USERS } from '../constants/backend';
import User from '../entities/User';

export const getUsers = (query: string, page: number, limit: number): Promise<User[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    const params = query !== '' ? { _page: page, _limit: limit, _sort: 'id', _order: 'desc', q: query } : { _page: page, _limit: limit };
    const response = await api.get(`${USERS}`, { params });
    if (response.status === 200) {
      const newFeatures = response.data.map((user: User) => new User(user));
      resolve(newFeatures);
    }
  } catch (error) {
    reject(error);
  }
});

export const getUserByCredentials = (login: any) => new Promise( async (resolve, reject) => {
  try {
    const params = login;
    const response = await api.get(`${USERS}`, { params });
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const createAccount = (data: any) => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(`${USERS}`, data);
    if (response.status === 201) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});