import { Component, OnInit } from '@angular/core';
import { AuthFacadeService } from '../../../enttities/auth/auth.facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly user$ = this.auth.getUser();
  readonly isAuthenticated$ = this.auth.isAuthenticated();

  constructor( private auth: AuthFacadeService ) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
  }

}
