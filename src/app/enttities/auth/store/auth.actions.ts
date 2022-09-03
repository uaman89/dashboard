import { createAction, props } from '@ngrx/store';
import { AuthType } from './auth.enums';
import { User } from '@auth0/auth0-spa-js';

export const login = createAction(AuthType.login);
export const loginSuccess = createAction(AuthType.loginSuccess, props<{ user: User }>());
export const loginFail = createAction(AuthType.loginFail);

export const logout = createAction(AuthType.logout);
