import {createAction, props} from "@ngrx/store";
import {Post} from "../../models/post.models";

export const loadPost = createAction ("[POST], Carga Post Process")
export const postList = createAction("[POST], Carga Post List Success",props<{postList:Post[]}>())
export const postError = createAction ("[POST], Cargar Post Error",props<{payload:any}>())
export const postListUserId = createAction("[POST], Carga Post List User Id",props<{userId:number}>())
