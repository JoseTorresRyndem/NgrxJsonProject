import {createAction, props} from "@ngrx/store";
import {Post, PostComment} from "../../models/post.models";

// Action to load posts
export const loadPost = createAction ("[POST], Carga Post Process")

// Action to handle successful loading of post list
export const postList = createAction("[POST], Carga Post List Success",props<{postList:Post[]}>())

// Action to update pagination
export const updatePagination = createAction('[POST] Update Pagination',props<{ page: number }>())

// Action to handle errors
export const postError = createAction ("[POST], Cargar Post Error",props<{payload:any}>())

// Action to load posts by user ID
export const postListUserId = createAction("[POST], Cargar Post List por User Id",props<{userId:number}>())

// Action to load post detail
export const loadPostDetail = createAction("[POST], Load Post Detail",props<{postId:number}>())

// Action to handle successful loading of post detail
export const postDetailSuccess = createAction("[POST], Post Detail Success",props<{postDetail:Post}>())

// Action to load comments for a post detail
export const loadPostDetailComments = createAction("[POST], Load Post Detail Comments",props<{postId:number}>())

// Action to handle successful loading of post detail comments
export const postDetailCommentsSuccess = createAction("[POST], Post Detail Comments Success",props<{postComments:PostComment[]}>())

