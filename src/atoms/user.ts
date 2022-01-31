import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { IUser } from '../entities/User';

export const usersAtom = atom<IUser[]>([]);
export const queryUsers = atom<string>('');
export const startPageAtom = atom<number>(0);
export const isLoggedInAtom = atomWithStorage<boolean>('isLoggedIn', false);
export const userAtom = atomWithStorage<IUser | null>('user', null);