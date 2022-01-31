import api from './api';
import { FEATURES } from '../constants/backend';
import Feature from '../entities/Feature';

export const getFeatures = (query: string, page: number, limit: number): Promise<Feature[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    const params = query !== '' ? { _page: page, _limit: limit, _sort: 'id', _order: 'desc', q: query } : { _page: page, _limit: limit };
    const response = await api.get(`${FEATURES}`, { params });
    if (response.status === 200) {
      const newFeatures = response.data.map((feature: Feature) => new Feature(feature));
      resolve(newFeatures);
    }
  } catch (error) {
    reject(error);
  }
});