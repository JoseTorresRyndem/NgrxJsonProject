import {Action, createReducer, on} from "@ngrx/store";
import * as PostActions from "./post.actions";
import {Post, PostComment} from "../../models/post.models";


export interface PostState{
  allPosts:Post[],
  posts:Post[],
  paginatedPosts: Post[];
  currentPage: number;
  pageSize: number;
  loading:boolean,
  postDetail:Post,
  postDetailComments:PostComment[],
  loadingComments:boolean,
  error:any
}
export const initialState:PostState= {
  allPosts:[],
  posts:[],
  paginatedPosts: [],
  currentPage: 1,
  pageSize: 5,
  postDetail: {
    userId:0,
    id: 0,
    title: '',
    body: '',
  },
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
    allPosts:[...postList],
    paginatedPosts: applyPagination(postList, 1, state.pageSize),
    currentPage: 1
  })),
  on(PostActions.postListUserId,(state,{userId})=>{
    const filteredPosts = userId === 0 ? [...state.allPosts] : state.allPosts.filter(post => post.userId === userId);
    return {
      ...state,
      posts: filteredPosts,
      paginatedPosts: applyPagination(filteredPosts, 1, state.pageSize),
      currentPage: 1
    }
  }),
  on(PostActions.updatePagination, (state, { page }) => ({
    ...state,
    currentPage: page,
    paginatedPosts: applyPagination(state.posts, page, state.pageSize)
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

function applyPagination(posts: Post[], page: number, pageSize: number): Post[] {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return posts.slice(start, end);
}
