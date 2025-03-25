import { Component, Input } from '@angular/core';
import { Post } from '../../../../models/post.models';

@Component({
  selector: 'app-card-post-detail',
  templateUrl: './mol-card-post-detail.component.html',
  styleUrls: ['./mol-card-post-detail.component.scss'],
})
export class MolCardPostDetailComponent {
  /**
   * @Input() postDetail variable to hold the post detail data
   */
  @Input() postDetail!: Post;
}
