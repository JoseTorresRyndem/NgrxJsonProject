import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadPost} from "../../../../state/post/post.actions";
import {selectPostList} from "../../../../state/post/post.selectors";
import {Post} from "../../../../models/post.models";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  post:Post[] = []

  constructor(private store:Store) { }
  ngOnInit(): void {
    this.store.dispatch(loadPost())
    this.store.select(selectPostList).subscribe(post=>{
      this.post = post;
    })
  }

}
