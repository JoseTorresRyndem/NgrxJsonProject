import {PostState} from "./post.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";


export const selectPostState = createFeatureSelector<PostState>('posts');
export const selectPostList = createSelector(selectPostState, (state: PostState) => state.posts);
export const selectLoadingState = createSelector(selectPostState, (state: PostState) => state.loading);
export const selectPostDetail = createSelector(selectPostState, (state: PostState) => state.postDetail);
export const selectPostDetailComments = createSelector(selectPostState, (state: PostState) => state.postDetailComments);
export const selectLoadComments = createSelector(selectPostState, (state: PostState) => state.loadingComments);
