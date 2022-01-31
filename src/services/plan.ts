import api from './api';
import { PLANS } from '../constants/backend';
import Plan from '../entities/Plan';

export const getPlans = (query: string, page: number, limit: number): Promise<Plan[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    const params = query !== '' ? { _page: page, _limit: limit, _sort: 'id', _order: 'desc', q: query } : { _page: page, _limit: limit };
    const response = await api.get(`${PLANS}`, { params });
    if (response.status === 200) {
      const newPlans = response.data.map((plan: Plan) => new Plan(plan));
      resolve(newPlans);
    }
  } catch (error) {
    reject(error);
  }
});