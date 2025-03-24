import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadPost, postListUserId, updatePagination} from "../../../../state/post/post.actions";
import {
  selectCurrentPage,
  selectLoadingState,
  selectPaginatedPosts,
  selectPostList,
  selectTotalItems
} from "../../../../state/post/post.selectors";
import {Post} from "../../../../models/post.models";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  isLoading$:Observable<boolean> = this.store.select(selectLoadingState)
  paginatedItems$: Observable<Post[]> = this.store.select(selectPaginatedPosts);

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadPost());
  }

  onUserSelected(id: number) {
    this.store.dispatch(postListUserId({userId:id}))
  }
}
