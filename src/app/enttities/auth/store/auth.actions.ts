import { createAction, props } from '@ngrx/store';
import { AuthType } from './auth.enums';
import { AuthorizedUser } from "./auth-store.interface";

export const login = createAction(AuthType.login);
export const loginSuccess = createAction(AuthType.loginSuccess, props<{ user: AuthorizedUser }>());
export const loginFail = createAction(AuthType.loginFail);

export const logout = createAction(AuthType.logout);
