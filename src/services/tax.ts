import api from './api';
import { TAXES } from '../constants/backend';
import Tax from '../entities/Tax';

export const getTaxes = (query: string, page: number, limit: number): Promise<Tax[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    const params = query !== '' ? { _page: page, _limit: limit, _sort: 'id', _order: 'asc', q: query } : { _page: page, _limit: limit };
    const response = await api.get(`${TAXES}`, { params });
    if (response.status === 200) {
      const newTaxes = response.data.map((tax: Tax) => new Tax(tax));
      resolve(newTaxes);
    }
  } catch (error) {
    reject(error);
  }
});