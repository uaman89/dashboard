import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-spa-js';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { logout, setUser, subscribeForUser } from './store/auth.actions';
import { selectUser } from './store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(private auth: AuthService, private store: Store) {
    this.subscribeForUserChanges();
  }

  getUser(): Observable<User | null> {
    return this.store.select(selectUser);
  }

  setUser(user: User): void {
    this.store.dispatch(setUser({ user }));
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }

  login() {
    this.auth.loginWithRedirect()
  }

  logout(): void {
    this.store.dispatch(logout());
  }

  private subscribeForUserChanges() {
    this.store.dispatch(subscribeForUser());
  }

}
