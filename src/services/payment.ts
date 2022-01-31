import api from './api';
import { PAYMENTS } from '../constants/backend';
import Payment, { IPayment } from '../entities/Payment';

export const getPayments = (query: string, page: number, limit: number): Promise<Payment[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    const params = query !== '' ? { _page: page, _limit: limit, _sort: 'id', _order: 'desc', q: query } : { _page: page, _limit: limit };
    const response = await api.get(`${PAYMENTS}`, { params });
    if (response.status === 200) {
      const newFeatures = response.data.map((payment: Payment) => new Payment(payment));
      resolve(newFeatures);
    }
  } catch (error) {
    reject(error);
  }
});

export const createPayment = (data: IPayment): Promise<Payment | null> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(`${PAYMENTS}`, data);
    if (response.status === 201) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});