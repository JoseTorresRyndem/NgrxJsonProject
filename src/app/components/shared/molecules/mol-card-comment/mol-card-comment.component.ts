import { Component, Input } from '@angular/core';
import { PostComment } from '../../../../models/post.models';

@Component({
  selector: 'app-card-comment',
  templateUrl: './mol-card-comment.component.html',
  styleUrls: ['./mol-card-comment.component.scss'],
})
export class MolCardCommentComponent {
  /**
   * comment variable to hold the post comment
   */
  @Input() comment!: PostComment;
}
