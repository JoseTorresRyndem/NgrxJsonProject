import {Action, createReducer, on} from "@ngrx/store";
import * as PostActions from "./post.actions";
import {Post} from "../../models/post.models";


export interface PostState{
  posts:Post[],
  allPosts:Post[],
  loading:boolean,
  error:any
}
export const initialState:PostState= {
  posts:[],
  allPosts:[],
  loading:false,
  error:null,
}

const _postReducer = createReducer(initialState,
  on(PostActions.loadPost, (state) => ({ ...state, loading: true })),
  on(PostActions.postList,(state,{postList})=>({
    ...state,
    loading:false,
    posts:[...postList],
    allPosts:[...postList]
  })),
  on(PostActions.postListUserId,(state,{userId})=>({
    ...state,
    posts: userId === 0 ? [...state.allPosts] : state.allPosts.filter(post => post.userId === userId),
  })),
);

export function postReducer (state:PostState = initialState,actions:Action){
  return _postReducer(state,actions)
}
