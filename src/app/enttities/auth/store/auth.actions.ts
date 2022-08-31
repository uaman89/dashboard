import { createAction, props } from '@ngrx/store';
import { AuthType } from './auth.enums';
import { User } from '@auth0/auth0-spa-js';

export const setUser = createAction(AuthType.setUser, props<{ user: User }>());
export const logout = createAction(AuthType.logout);
