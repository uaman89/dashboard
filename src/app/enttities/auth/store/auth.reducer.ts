import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';
import { AuthStore } from '../auth-store.interface';

export const initialState: AuthStore = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => {
    //todo: get real user from auth0.servise
    return { ...state, user: { name: 'Fake user'} };
  }),
  on(logout, (state) => {
    return { ...state, user: null };
  }),
);
