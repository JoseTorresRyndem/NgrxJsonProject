import {Action, createReducer, on} from "@ngrx/store";
import * as PostActions from "./post.actions";
import {Post, PostComment} from "../../models/post.models";


export interface PostState{
  posts:Post[],
  allPosts:Post[],
  postDetail:Post,
  postDetailComments:PostComment[],
  loadingComments:boolean,
  loading:boolean,
  error:any
}
export const initialState:PostState= {
  posts:[],
  postDetail: {
    userId:0,
    id: 0,
    title: '',
    body: '',
  },
  allPosts:[],
  postDetailComments:[],
  loadingComments:false,
  loading:false,
  error:null,
}

const _postReducer = createReducer(initialState,
  on(PostActions.loadPost, (state) => ({ ...state, loading: true })),
  on(PostActions.loadPostDetail, (state) => ({ ...state, loading: true })),
  on(PostActions.loadPostDetailComments, (state) => ({ ...state, loadingComments: true })),
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
  on(PostActions.postDetailSuccess,(state,{postDetail})=>({
    ...state,
    loading:false,
    postDetail:{...postDetail}
  })),
  on(PostActions.postDetailCommentsSuccess,(state,{postComments})=>({
    ...state,
    loadingComments:false,
    postDetailComments:[...postComments]
  })),

);

export function postReducer (state:PostState = initialState,actions:Action){
  return _postReducer(state,actions)
}
