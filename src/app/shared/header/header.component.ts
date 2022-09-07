import { Component } from '@angular/core';
import { AuthFacadeService } from '../../enttities/auth/auth.facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  readonly user$ = this.auth.getUser();

  constructor( private auth: AuthFacadeService ) {
  }

  logout(): void {
    this.auth.logout();
  }

}
