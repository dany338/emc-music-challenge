import { useContext } from "react";
import { IdentityStateContext, IdentityDispatchContext } from "./identity.context";
import { IIdentityState, SET_USER, SET_ISLOGGEDIN } from "./identity.types";
import { IUser } from '../../entities/User';

export const useIdentityState = (): IIdentityState => {
  const contextValue = useContext<IIdentityState>(IdentityStateContext);
  if (!contextValue) {
    throw new Error('Context IdentityStateContext is undefined, please use it into a Provider context');
  }
  return contextValue;
};

export interface IUseIdentityActions {
  setUser: (user: IUser) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const useIdentityActions = (): IUseIdentityActions => {
  const dispatch = useContext(IdentityDispatchContext);

  if (dispatch === undefined) {
    throw new Error('IdentityDispatchContext context not defined');
  }

  const setUser = (user: IUser) => {
    dispatch({
      type: SET_USER,
      user
    });
  }

  const setIsLoggedIn = (isLoggedIn: boolean) => {
    dispatch({
      type: SET_ISLOGGEDIN,
      isLoggedIn
    });
  }

  return {
      setUser,
      setIsLoggedIn
  };
};


export const useIdentity = (): [IIdentityState, IUseIdentityActions] => [useIdentityState(), useIdentityActions()]