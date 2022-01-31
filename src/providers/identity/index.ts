import { IIdentityState } from "./identity.types";
import { IdentityProvider } from "./identity.context";
import {
  useIdentityState,
  useIdentityActions,
  useIdentity,
} from "./identity.hooks";

export {
  //Hooks
  useIdentityState,
  useIdentityActions,
  useIdentity,

  //Provider
  IdentityProvider
};

export type {
  //Types
  IIdentityState
};

