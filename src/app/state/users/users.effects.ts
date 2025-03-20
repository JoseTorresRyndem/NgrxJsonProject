
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {PostService} from "../../core/services/post-service.service";
import * as UsersAction from "./users.actions";
import {catchError, map, mergeMap, of} from "rxjs";


@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersAction.loadedUsers),
      mergeMap(()=>this.postService.getUsers().pipe(
        map(user=>UsersAction.usersList({usersList:user})),
        catchError((err)=> of(UsersAction.userError({payload:err})))
      ))
    )
  );
}
