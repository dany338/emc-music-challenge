import { IUser } from '../../entities/User';

export const SET_USER = 'SET_USER';
export const SET_ISLOGGEDIN = "SET_ISLOGGEDIN";

export interface IIdentityState {
  isLoggedIn: boolean;
  user: IUser | null;
}

export type IIdentityActionType =
{ type: typeof SET_USER; user: IUser } |
{ type: typeof SET_ISLOGGEDIN; isLoggedIn: boolean };