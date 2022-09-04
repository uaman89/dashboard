import { User } from '@auth0/auth0-spa-js';

export type AuthorizedUser = User;

export interface AuthStore {
  user: AuthorizedUser | null;
}
