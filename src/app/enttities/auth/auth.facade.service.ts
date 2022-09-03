import {Injectable} from '@angular/core';
import {User} from '@auth0/auth0-spa-js';
import {AuthService} from '@auth0/auth0-angular';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {login, logout} from './store/auth.actions';
import {selectUser} from './store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(private auth: AuthService, private store: Store) {
  }

  login() {
    this.store.dispatch(login());
  }

  logout(): void {
    this.store.dispatch(logout());
  }

  getUser(): Observable<User | null> {
    return this.store.select(selectUser);
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }

}
