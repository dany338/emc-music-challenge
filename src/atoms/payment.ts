import { atom } from 'jotai';
import { IPayment, ICustomerInformationProps, IPaymentSelectionProps } from '../entities/Payment';

export const paymentsAtom = atom<IPayment[]>([]);
export const queryAtom = atom<string>('');
export const startPageAtom = atom<number>(0);
export const customerInfoAtom = atom<ICustomerInformationProps | null>(null);
export const paymentSelectionAtom = atom<IPaymentSelectionProps | null>(null);
export const orderTabAtom = atom<number>(0);
export const taxAtom = atom<number>(0);
export const totalAtom = atom<number>(0);
export const cardPreviewAtom = atom<IPaymentSelectionProps | null | any>(null);
export const completeOrderAtom = atom<boolean>(false);