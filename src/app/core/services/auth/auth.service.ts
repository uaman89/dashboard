import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { CurrentUser } from '../../../enttities/auth/users.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new ReplaySubject<CurrentUser>(1);

  constructor(private router: Router) {

  }

  getUser(): Observable<CurrentUser> {
    return this.user$.asObservable();
  }

  isAuthorized(): boolean {
    const userData = JSON.parse(localStorage.getItem('user') || '') || null;
    this.user$.next(userData);

    return !!userData;
  }

  login(params: { name: string }) {
    const userData = {
      name: params.name
    }
    localStorage.setItem('user', JSON.stringify(userData));
    this.user$.next(userData);
    this.router.navigate(['']);
  }

  logout() {
    localStorage.removeItem('user');
    this.user$.next(null);
    this.router.navigate(['/auth']);
  }
}
