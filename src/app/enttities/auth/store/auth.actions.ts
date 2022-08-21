import { createAction } from '@ngrx/store';

export const login = createAction('[Auth] Login');
export const logout = createAction('[Auth] Logout');
export const getUser = createAction('[Auth] Get User');
