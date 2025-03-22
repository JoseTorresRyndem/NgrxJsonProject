import {ActionReducerMap} from "@ngrx/store";
import {postReducer, PostState} from "./post/post.reducer";
import {usersReducer, UsersState} from "./users/users.reducer";

export interface AppState{
  posts:PostState
  users:UsersState
}

export const appReducer:ActionReducerMap<AppState> = {
  posts:postReducer,
  users:usersReducer
}
