import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor( public auth: AuthService ) { }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

}
