import { createFeature, createReducer, on } from '@ngrx/store';
import { UsersStore } from "./users-store.interface";
import { loadUsersSuccess } from "./users.actions";

export const initialState: UsersStore = {
  users: [],
  paginator: {
    pageIndex: 0,
    pageSize: 10
  },
  sort: {
    active: 'name',
    direction: 'asc'
  }
};

export const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialState,
    on(loadUsersSuccess, (state, {users}) => ({
      ...state,
      users: users || [],
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectUsersState, // feature selector
} = usersFeature;


