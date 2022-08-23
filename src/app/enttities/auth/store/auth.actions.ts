import { createAction, props } from '@ngrx/store';
import { AuthType } from './auth.enums';
import { User } from '@auth0/auth0-spa-js';

// todo: Ask / Google - props<User | null>  is not allowed, why?
export const setUser = createAction(AuthType.setUser, props<User | {}>());
