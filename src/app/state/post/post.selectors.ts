import {PostState} from "./post.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";


// Selector to get the entire post state
export const selectPostState = createFeatureSelector<PostState>('posts');

// Selector to get the list of posts
export const selectPostList = createSelector(selectPostState, (state: PostState) => state.posts);

// Selector to get the loading state
export const selectLoadingState = createSelector(selectPostState, (state: PostState) => state.loading);

// Selector to get the post detail
export const selectPostDetail = createSelector(selectPostState, (state: PostState) => state.postDetail);

// Selector to get the comments of a post detail
export const selectPostDetailComments = createSelector(selectPostState, (state: PostState) => state.postDetailComments);

// Selector to get the loading state for comments
export const selectLoadComments = createSelector(selectPostState, (state: PostState) => state.loadingComments);

// Selector to get the paginated posts
export const selectPaginatedPosts = createSelector(selectPostState, (state) => state.paginatedPosts);

// Selector to get the total number of posts
export const selectTotalItems = createSelector(selectPostState, (state) => state.posts.length);

// Selector to get the current page number
export const selectCurrentPage = createSelector(selectPostState, (state) => state.currentPage);
