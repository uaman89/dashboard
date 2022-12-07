import { createSelector } from "@ngrx/store";
import { selectUsersState } from "./users.reducer";

export const selectUsers = createSelector(
  selectUsersState,
  ({users}) => users ?? []
);
