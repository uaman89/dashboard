import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';
import { CurrentUser } from '../../../enttities/auth/users.entity';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$!: Observable<CurrentUser>;

  constructor( private authService: AuthService ) {
    this.user$ = this.authService.getUser();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
