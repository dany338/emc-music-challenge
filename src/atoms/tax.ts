import { atom } from 'jotai';
import Tax from '../entities/Tax';

export const taxesAtom = atom<Tax[]>([]);
export const queryAtom = atom<string>('');
export const startPageAtom = atom<number>(0);