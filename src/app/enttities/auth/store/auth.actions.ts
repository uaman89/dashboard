import { createAction, props } from '@ngrx/store';
import { AuthType } from './auth.enums';
import { User } from '@auth0/auth0-spa-js';

// export const login = createAction(AuthType.login);
// export const logout = createAction(AuthType.logout);
export const setUser = createAction(AuthType.setUser, props<User>());
// export const getUser = createAction(AuthType.getUser);
