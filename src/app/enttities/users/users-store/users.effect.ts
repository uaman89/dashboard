import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { loadUsers, loadUsersSuccess } from './users.actions';
import { UsersApiService } from "../users-api.service";

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() => this.usersApi.loadUsers()),
      map( users => loadUsersSuccess({users}))
    );
  });

  constructor(
    private actions$: Actions,
    private usersApi: UsersApiService
  ) {
  }
}
