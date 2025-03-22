import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {PostService} from "../../core/services/post-service.service";
import * as PostActions from "./post.actions";
import {catchError, map, mergeMap, of} from "rxjs";



@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPost),
      mergeMap(()=>this.postService.getPosts().pipe(
        map(posts=>PostActions.postList({postList:posts})),
        catchError((err)=> of(PostActions.postError({payload:err})))
      ))
    )
  )

  loadPostDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPostDetail),
      mergeMap((action)=> this.postService.getPostDetail(action.postId).pipe(
        map(post=>PostActions.postDetailSuccess({postDetail:post})),
        catchError((err)=> of(PostActions.postError({payload:err})))
      ))
    )
  )
  loadPostDetailComments = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPostDetailComments),
      mergeMap((action)=> this.postService.getPostDetailComments(action.postId).pipe(
        map(post=>PostActions.postDetailCommentsSuccess({postComments:post})),
        catchError((err)=> of(PostActions.postError({payload:err})))
      ))
    )
  )
}
