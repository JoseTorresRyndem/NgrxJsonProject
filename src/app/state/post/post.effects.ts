import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {PostService} from "../../core/services/post-service.service";
import * as PostActions from "./post.actions";
import {catchError, map, mergeMap, of} from "rxjs";



@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  /**
   * loadPosts$ effect to load the list of posts
   */
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPost),
      mergeMap(() => this.postService.getPosts().pipe(
        map(posts => PostActions.postList({ postList: posts })),
        catchError((err) => {
          window.alert('Error al cargar los posts');
          return of(PostActions.postError({payload: err}))
        })
      ))
    )
  )

  /**
   * loadPostDetail$ effect to load the details of a post
   * @param action
   */
  loadPostDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPostDetail),
      mergeMap((action) => this.postService.getPostDetail(action.postId).pipe(
        map(post => PostActions.postDetailSuccess({ postDetail: post })),
        catchError((err) => {
          window.alert('Error al cargar el detalle del post');
          return of(PostActions.postError({payload: err}))
        })
      ))
    )
  )

  /**
   * loadPostDetailComments effect to load the comments of a post detail
   * @param action
   */
  loadPostDetailComments = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPostDetailComments),
      mergeMap((action) => this.postService.getPostDetailComments(action.postId).pipe(
        map(post => PostActions.postDetailCommentsSuccess({ postComments: post })),
        catchError((err) => {
          window.alert('Error al cargar los comentarios del post');
          return of(PostActions.postError({payload: err}))
        })
      ))
    )
  )
}
