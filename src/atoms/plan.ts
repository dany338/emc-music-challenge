import { atom } from 'jotai';
import Plan from '../entities/Plan';

export const plansAtom = atom<Plan[] | any>([]);
export const queryAtom = atom<string>('');
export const startPageAtom = atom<number>(0);
export const planSelectedAtom = atom<Plan | null>(null);