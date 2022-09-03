import { Component } from '@angular/core';
import { AuthFacadeService } from '../../enttities/auth/auth.facade.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  isAuthenticated$ = this.auth.isAuthenticated();

  constructor( private auth: AuthFacadeService ) { }

  loginWithRedirect(): void {
    this.auth.login();
  }

}
