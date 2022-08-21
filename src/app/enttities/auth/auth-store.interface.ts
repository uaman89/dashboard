import { User } from '@auth0/auth0-spa-js';

export interface AuthStore {
  user: User | null;
}
