import { createReducer, on } from '@ngrx/store';
import { logout, setUser } from './auth.actions';
import { AuthStore } from '../auth-store.interface';

export const initialState: AuthStore = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    setUser,
    (state, { user }) => ({ ...state, user })
  ),
  // todo: does it has sense? never user though...
  on(
    logout,
    state => ({ ...state, user: null })
  ),
);
