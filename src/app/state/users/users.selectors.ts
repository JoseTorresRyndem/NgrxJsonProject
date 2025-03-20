
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UsersState} from "./users.reducer";


export const selectPostState = createFeatureSelector<UsersState>('users');

export const selectUsersList = createSelector(
  selectPostState,
  (state: UsersState) => state.users
);
