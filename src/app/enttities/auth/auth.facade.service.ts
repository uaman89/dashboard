import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-spa-js';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { setUser } from './store/auth.actions';
import { Observable, of } from 'rxjs';

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
    //todo: return selector
    return of({ name: 'Fake User' } as User);
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }

  setUser(user: User): void {
    //todo: ASK/Google - why can't set null?
    this.store.dispatch(setUser(user || {}));
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
