import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor( public auth: AuthService ) { }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

}
