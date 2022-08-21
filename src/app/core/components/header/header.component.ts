import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly user$ = this.authService.user$;
  readonly isAuthenticated$ = this.authService.isAuthenticated$;

  constructor( private authService: AuthService ) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout({ returnTo: window.location.origin });
  }

}
