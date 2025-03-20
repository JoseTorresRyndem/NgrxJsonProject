import {ActionReducerMap} from "@ngrx/store";
import {postReducer} from "./post/post.reducer";
import {usersReducer} from "./users/users.reducer";

export interface AppState{
  posts:any
  users:any
}

export const appReducer:ActionReducerMap<AppState> = {
  posts:postReducer,
  users:usersReducer
}
