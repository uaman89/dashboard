import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { loadUsers } from "../../../enttities/users/users-store/users.actions";
import { selectUsers } from "../../../enttities/users/users-store/users.reducer";
import { Observable } from "rxjs";
import { User } from "../../../enttities/users/users.interface";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {

  usersData$: Observable<User[]> = this.store.select(selectUsers);

  constructor(private store: Store) {
    store.dispatch(loadUsers());
  }

}
