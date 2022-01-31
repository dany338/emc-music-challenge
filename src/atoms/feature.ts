import { atom } from 'jotai';
import Feature from '../entities/Feature';

export const featuresAtom = atom<Feature[]>([]);
export const queryAtom = atom<string>('');
export const startPageAtom = atom<number>(0);