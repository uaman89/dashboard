import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-spa-js';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { setUser } from './store/auth.actions';
import { selectUser } from './store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(private auth: AuthService, private store: Store) {
    this.subscribeForUserChanges();
  }

  /**
   * emitted once, then complete
   */
  getUser(): Observable<User | null> {
    return this.store.select(selectUser);
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }

  setUser(user: User): void {
    // todo: ASK - looks like dispatch always wrap "payload" in object and add type,
    // so for null value it comes - {type: '[Auth]: Set User'}
    // wrapping in {} solves the "problem": (user) -> ({user})
    this.store.dispatch(setUser({ user }));
  }

  private subscribeForUserChanges() {
    this.auth.user$
      .pipe(map(user => user || null))
      .subscribe(user => this.setUser(user as User));
  }

  logout() {
    this.auth.logout({ returnTo: window.location.origin });
  }
}
