import { Component, Input } from '@angular/core';
import { Post } from '../../../../models/post.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-post',
  templateUrl: './mol-card-post.component.html',
  styleUrls: ['./mol-card-post.component.scss'],
})
export class MolCardPostComponent {
  /**
   * post variable to hold the post data
   */
  @Input() post!: Post;

  constructor(private router: Router) {}

  /**
   * detailPost method to navigate to the detail page of the post
   * @param post
   */
  detailPost(post: Post) {
    this.router.navigate(['/post', post.id]);
  }
}
