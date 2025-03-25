import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { postListUserId } from '../../../../state/post/post.actions';
import {
  selectLoadingState,
  selectPaginatedPosts,
} from '../../../../state/post/post.selectors';
import { Post } from '../../../../models/post.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  /**
   * Observable for loading state
   */
  isLoading$: Observable<boolean> = this.store.select(selectLoadingState);

  /**
   * Observable for paginated posts
   */
  paginatedItems$: Observable<Post[]> = this.store.select(selectPaginatedPosts);

  constructor(private store: Store) {}

  /**
   * Dispatches an action to load posts for a selected user
   * @param id - User ID
   */
  onUserSelected(id: number) {
    this.store.dispatch(postListUserId({ userId: id }));
  }
}
