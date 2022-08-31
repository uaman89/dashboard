import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AuthType } from './auth.enums';
import { AuthService } from '@auth0/auth0-angular';
import { loginFail, loginSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {

  doLogin$ = createEffect(() => this.authService.user$.pipe(
    map(user => user || null),
    map(user => {
      if (!user) {
        return loginFail();
      }
      return loginSuccess({ user });
    })
  ));

  doLogout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthType.logout),
    tap(() => this.authService.logout({ returnTo: window.location.origin })),
    map(() => ({ type: AuthType.logoutSuccess }))
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
