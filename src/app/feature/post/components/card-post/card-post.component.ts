import {Component, Input} from '@angular/core';
import {Post} from "../../../../models/post.models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent  {
  @Input() post!: Post;

  constructor(private router: Router) { }

  detailPost(post: Post) {
    this.router.navigate(['/posts', post.id]);
  }

}
