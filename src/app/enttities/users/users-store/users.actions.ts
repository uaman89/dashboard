import { createAction, props } from '@ngrx/store';
import { UsersActionType } from './users.enums';
import { User } from "../users.interface";

export const loadUsers = createAction(UsersActionType.getUsers);
export const loadUsersSuccess = createAction(UsersActionType.loadSuccess, props<{ users: User[] }>());
