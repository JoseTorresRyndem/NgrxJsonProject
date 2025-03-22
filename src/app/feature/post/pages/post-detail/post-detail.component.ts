import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {loadPostDetail, loadPostDetailComments} from "../../../../state/post/post.actions";
import {Store} from "@ngrx/store";
import {
  selectLoadComments,
  selectLoadingState,
  selectPostDetail,
  selectPostDetailComments
} from "../../../../state/post/post.selectors";
import {Observable} from "rxjs";
import {Post, PostComment} from "../../../../models/post.models";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postDetail$: Observable<Post> = this.store.select(selectPostDetail)
  postDetailComments$: Observable<PostComment[]> = this.store.select(selectPostDetailComments)
  isloading$: Observable<boolean> = this.store.select(selectLoadingState)
  isloadingComments$: Observable<boolean> = this.store.select(selectLoadComments)

  constructor(private route:ActivatedRoute,private store:Store, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
        this.store.dispatch(loadPostDetail({postId: id}));
        this.store.dispatch(loadPostDetailComments({postId: id}))
      }
    )
  }

  back() {
    this.router.navigate(['/posts'])
  }
}
