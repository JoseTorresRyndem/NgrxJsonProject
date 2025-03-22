import {Component, Input, OnInit} from '@angular/core';
import {PostComment} from "../../../../models/post.models";

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.scss']
})
export class CardCommentComponent implements OnInit {
  @Input() comment!: PostComment;

  constructor() { }

  ngOnInit(): void {
  }

}
