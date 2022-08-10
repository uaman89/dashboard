import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthorized(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }

  login(params: object) {
    localStorage.setItem('user', JSON.stringify(params));
    this.router.navigate(['']);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }
}
