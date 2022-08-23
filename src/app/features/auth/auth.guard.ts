import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
        })
      );
  }

}
