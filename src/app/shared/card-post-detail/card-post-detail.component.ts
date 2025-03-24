import {Component, Input} from '@angular/core';
import {Post} from "../../models/post.models";

@Component({
  selector: 'app-card-post-detail',
  templateUrl: './card-post-detail.component.html',
  styleUrls: ['./card-post-detail.component.scss']
})
export class CardPostDetailComponent{
  /**
   * @Input() postDetail variable to hold the post detail data
   */
  @Input() postDetail!: Post;


}
