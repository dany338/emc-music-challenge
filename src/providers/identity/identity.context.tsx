import React, { createContext, Dispatch, useReducer, useMemo, Context } from "react";
import { IIdentityState, IIdentityActionType } from "./identity.types";
import identityReducer from "./identity.reducer";

const initialState = {
  isLoggedIn: false,
  user: null,
} as IIdentityState;

export const IdentityStateContext = createContext(initialState);

export const IdentityDispatchContext: Context<Dispatch<
  IIdentityActionType
>> = createContext<Dispatch<IIdentityActionType>>(() => {});

export const IdentityProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(identityReducer, initialState);

  return (
    <IdentityStateContext.Provider value={useMemo(() => (state), [state])}>
      <IdentityDispatchContext.Provider value={useMemo(() => (dispatch), [dispatch])}>
        {children}
      </IdentityDispatchContext.Provider>
    </IdentityStateContext.Provider>
  );
};

export default IdentityProvider;