import {NgModule} from "@angular/core";
import {PostsRoutingModule} from "./posts-routing.module";
import {PostDetailComponent } from './pages/post-detail/post-detail.component';
import {PostListComponent} from "./pages/post-list/post-list.component";
import {CommonModule} from "@angular/common";
import { CardPostComponent } from './components/card-post/card-post.component';
import { DropdownUsersComponent } from './components/dropdown-users/dropdown-users.component';
import { CardPostSekeletonComponent } from './components/card-post-sekeleton/card-post-sekeleton.component';
import { CardPostDetailComponent } from './components/card-post-detail/card-post-detail.component';
import { CardCommentComponent } from './components/card-comment/card-comment.component';

@NgModule({
  declarations:[
    PostDetailComponent,
    PostListComponent,
    CardPostComponent,
    DropdownUsersComponent,
    CardPostSekeletonComponent,
    CardPostDetailComponent,
    CardCommentComponent
  ],
  imports:[CommonModule, PostsRoutingModule],
  providers:[],
  exports:[]
})
export class PostModule{}
