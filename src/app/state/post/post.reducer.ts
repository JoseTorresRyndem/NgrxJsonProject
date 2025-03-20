import {Action, createReducer, on} from "@ngrx/store";
import {loadPost, postList} from "./post.actions";
import {Post} from "../../models/post.models";

export interface PostState{
  posts:Post[],
  loaded:boolean,
  loading:boolean,
  error:any
}
export const initialState:PostState= {
  posts:[],
  loaded:false,
  loading:false,
  error:null,
}

const _postReducer = createReducer(initialState,
  on(loadPost, (state) => ({ ...state, loading: true })),
  on(postList,(state,{postList})=>({...state,loading:false,loaded:true,posts:[...postList]}))
);

export function postReducer (state:PostState = initialState,actions:Action){
  return _postReducer(state,actions)
}
