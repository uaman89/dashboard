import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {map, switchMap, tap} from 'rxjs/operators';
import {AuthType} from './auth.enums';
import {AuthService} from '@auth0/auth0-angular';
import {login, loginFail, loginSuccess} from './auth.actions';

@Injectable()
export class AuthEffects {

  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      switchMap(() => this.authService.user$),
      map(user => !!user ?
        loginSuccess({user}) :
        loginFail()
      )
    )
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      switchMap(() => this.authService.loginWithRedirect())
    );
  }, {
    dispatch: false,
  })

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthType.logout),
      tap(() => this.authService.logout({returnTo: window.location.origin})),
      map(() => ({type: AuthType.logoutSuccess}))
    )
  }, {
    dispatch: false,
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
