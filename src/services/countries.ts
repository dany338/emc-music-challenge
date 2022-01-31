import api from './api';
import { COUNTRIES } from '../constants/backend';
import Country from '../entities/Country';

export const getCountries = (query: string, page: number, limit: number): Promise<Country[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    const params = query !== '' ? { _page: page, _limit: limit, _sort: 'id', _order: 'asc', q: query } : { _page: page, _limit: limit };
    const response = await api.get(`${COUNTRIES}`, { params });
    if (response.status === 200) {
      const newCountries = response.data.map((country: Country) => new Country(country));
      resolve(newCountries);
    }
  } catch (error) {
    reject(error);
  }
});