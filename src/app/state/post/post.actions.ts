import {createAction, props} from "@ngrx/store";
import {Post, PostComment} from "../../models/post.models";

export const loadPost = createAction ("[POST], Carga Post Process")
export const postList = createAction("[POST], Carga Post List Success",props<{postList:Post[]}>())
export const postError = createAction ("[POST], Cargar Post Error",props<{payload:any}>())
export const postListUserId = createAction("[POST], Carga Post List User Id",props<{userId:number}>())
export const loadPostDetail = createAction("[POST], Load Post Detail",props<{postId:number}>())
export const postDetailSuccess = createAction("[POST], Post Detail Success",props<{postDetail:Post}>())
export const loadPostDetailComments = createAction("[POST], Load Post Detail Comments",props<{postId:number}>())
export const postDetailCommentsSuccess = createAction("[POST], Post Detail Comments Success",props<{postComments:PostComment[]}>())

