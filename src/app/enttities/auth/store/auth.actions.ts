import { createAction, props } from '@ngrx/store';
import { AuthType } from './auth.enums';
import { User } from '@auth0/auth0-spa-js';

export const subscribeForUser = createAction(AuthType.subscribeForUser);
export const setUser = createAction(AuthType.setUser, props<{ user: User | null }>());

export const loginSuccess = createAction(AuthType.setUser, props<{ user: User | null }>());
export const loginFail = createAction(AuthType.setUser);
export const logout = createAction(AuthType.logout);
export const logoutSuccess = createAction(AuthType.logoutSuccess);
