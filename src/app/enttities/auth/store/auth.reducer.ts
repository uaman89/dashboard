import { createReducer, on } from '@ngrx/store';
import { loginFail, loginSuccess, logout, logoutSuccess, setUser } from './auth.actions';
import { AuthStore } from '../auth-store.interface';

export const initialState: AuthStore = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    loginFail,
    logout,
    logoutSuccess,
    state => ({ ...state, user: null })
  ),
  on(
    loginSuccess,
    setUser,
    (state, { user }) => ({ ...state, user })
  ),
);
