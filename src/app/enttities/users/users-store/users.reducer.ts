import { createFeature, createReducer, on } from '@ngrx/store';
import { UsersStore } from "./users-store.interface";
import { loadUsersSuccess } from "./users.actions";

export const initialState: UsersStore = {
  users: [],
};

export const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialState,
    on(loadUsersSuccess, (state, {users}) => ({
      ...state,
      users,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectUsersState, // feature selector
  selectUsers, // selector for `users` property
} = usersFeature;
