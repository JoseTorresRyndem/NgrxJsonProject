import {NgModule} from "@angular/core";
import {PostsRoutingModule} from "./posts-routing.module";
import {PostDetailComponent} from './pages/post-detail/post-detail.component';
import {PostListComponent} from "./pages/post-list/post-list.component";
import {CommonModule} from "@angular/common";
import {CardPostComponent} from './components/card-post/card-post.component';
import {CardPostDetailComponent} from './components/card-post-detail/card-post-detail.component';
import {CardCommentComponent} from './components/card-comment/card-comment.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations:[
    PostDetailComponent,
    PostListComponent,
    CardPostComponent,
    CardPostDetailComponent,
    CardCommentComponent,
  ],
  imports:[CommonModule, PostsRoutingModule, SharedModule],
  providers:[],
  exports:[]
})
export class PostModule{}
