import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setUser } from '../../enttities/auth/store/auth.actions';
import { User } from '@auth0/auth0-spa-js';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store) {
  }

  canActivate (): Observable<boolean> {
    return this.authService.isAuthenticated$
      .pipe(
        tap(isAuthenticated => {
          if (!isAuthenticated){
            this.router.navigate(['/auth']);
          }
          // todo: is this ok to dispatch evey here?
          else {
            this.authService.getUser()
              .pipe(take(1))
              .subscribe(user => {
                this.store.dispatch(setUser(user as User))
              });
          }
        })
      );
  }

}
