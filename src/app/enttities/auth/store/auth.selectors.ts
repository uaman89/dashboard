import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_STORE_KEY } from './auth.enums';
import { AuthStore } from './auth-store.interface';

export const selectAuthState = createFeatureSelector<Readonly<AuthStore>>(AUTH_STORE_KEY);

export const selectUser = createSelector(
  selectAuthState,
  authState => authState.user
);
