import { createReducer, on } from '@ngrx/store';
import { setUser } from './auth.actions';
import { AuthStore } from '../auth-store.interface';
import { User } from '@auth0/auth0-spa-js';

export const initialState: AuthStore = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(setUser, (state, user: User) => {
    return { ...state, user };
  }),
);
