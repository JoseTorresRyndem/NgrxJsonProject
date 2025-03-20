import {createAction, props} from "@ngrx/store";
import {User} from "../../models/users.models";

export const loadedUsers = createAction ("[USERS], Cargar Users Process")
export const usersList = createAction ("[USERS], Cargar Users Success",props<{usersList:User[]}>())
export const userError = createAction ("[USERS], Cargar Users Process",props<{payload:any}>())
