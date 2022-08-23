import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '@auth0/auth0-spa-js';
import { AuthFacadeService } from '../../enttities/auth/auth.facade.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authFacade: AuthFacadeService) {
  }

  canActivate(): Observable<boolean> {
    return this.authFacade.isAuthenticated()
      .pipe(
        tap(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigate(['/auth']);
          }
          // todo: ASK - is this ok to set user (dispatch action) here?
          else {
            this.authFacade.getUser()
              .subscribe(user => this.authFacade.setUser(user as User));
          }
        })
      );
  }

}
