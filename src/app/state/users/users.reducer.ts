import {Action, createReducer, on} from "@ngrx/store";
import {loadedUsers, usersList} from "./users.actions";
import {User} from "../../models/users.models";


export interface UsersState{
  users:User[],
  loaded:boolean,
  loading:boolean,
  error:any
}
export const initialState:UsersState= {
  users:[],
  loaded:false,
  loading:false,
  error:null,
}

const _usersReducer = createReducer(initialState,
  on(loadedUsers, (state) => ({ ...state, loading: true })),
  on(usersList, (state,{usersList}) => ({ ...state, loading: false,loaded:true, users:[...usersList]})),

);

export function usersReducer (state:UsersState = initialState,actions:Action){
  return _usersReducer(state,actions)
}
