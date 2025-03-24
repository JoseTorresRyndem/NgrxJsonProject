import {Component, Input} from '@angular/core';
import {PostComment} from "../../models/post.models";

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.scss']
})
export class CardCommentComponent{
  /**
   * comment variable to hold the post comment
   */
  @Input() comment!: PostComment;
}
