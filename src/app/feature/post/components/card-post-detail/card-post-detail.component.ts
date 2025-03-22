import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../../models/post.models";

@Component({
  selector: 'app-card-post-detail',
  templateUrl: './card-post-detail.component.html',
  styleUrls: ['./card-post-detail.component.scss']
})
export class CardPostDetailComponent implements OnInit {

  @Input() postDetail!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
