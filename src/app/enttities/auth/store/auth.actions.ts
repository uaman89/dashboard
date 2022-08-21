import { createAction } from '@ngrx/store';
import { AuthType } from './auth.enums';

export const login = createAction(AuthType.login);
export const logout = createAction(AuthType.logout);
export const setUser = createAction(AuthType.setUser);
export const getUser = createAction(AuthType.getUser);
