import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadPost, postListUserId} from "../../../../state/post/post.actions";
import {selectLoadingState, selectPostList} from "../../../../state/post/post.selectors";
import {Post} from "../../../../models/post.models";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  post$:Observable<Post[]> =  this.store.select(selectPostList);
  isLoading$:Observable<boolean> = this.store.select(selectLoadingState)

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadPost())

  }

  onUserSelected(id: number) {
    this.store.dispatch(postListUserId({userId:id}))
  }
}
