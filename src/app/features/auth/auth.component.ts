import { Component } from '@angular/core';
import { AuthFacadeService } from '../../enttities/auth/auth.facade.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor( public auth: AuthFacadeService ) { }

  loginWithRedirect(): void {
    this.auth.login();
  }

}
