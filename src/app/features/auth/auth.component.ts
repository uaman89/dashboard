import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  authorize() {
    this.authService.login({userToken: 'abc-0000'});
  }

}
