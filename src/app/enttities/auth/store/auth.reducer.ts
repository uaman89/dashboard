import {createReducer, on} from '@ngrx/store';
import {loginFail, loginSuccess} from './auth.actions';
import {AuthStore} from '../auth-store.interface';

export const initialState: AuthStore = {
  user: null,
};

export const authReducer = createReducer<AuthStore>(
  initialState,
  on(
    loginFail,
    (state): AuthStore => ({...state, user: null})),
  on(
    loginSuccess,
    (state, {user}): AuthStore => ({...state, user})
  ),
);
