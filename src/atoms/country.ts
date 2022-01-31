import { atom } from 'jotai';
import Country from '../entities/Country';

export const countriesAtom = atom<Country[]>([]);
export const queryAtom = atom<string>('');
export const startPageAtom = atom<number>(0);