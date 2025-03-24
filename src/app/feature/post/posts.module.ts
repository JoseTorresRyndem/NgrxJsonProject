import {NgModule} from "@angular/core";
import {PostsRoutingModule} from "./posts-routing.module";
import {PostDetailComponent } from './pages/post-detail/post-detail.component';
import {PostListComponent} from "./pages/post-list/post-list.component";
import {CommonModule} from "@angular/common";
import { CardPostComponent } from './components/card-post/card-post.component';
import { DropdownUsersComponent } from './components/dropdown-users/dropdown-users.component';
import { CardPostDetailComponent } from './components/card-post-detail/card-post-detail.component';
import { CardCommentComponent } from './components/card-comment/card-comment.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginationPostComponent } from './components/pagination-post/pagination-post.component';

@NgModule({
  declarations:[
    PostDetailComponent,
    PostListComponent,
    CardPostComponent,
    DropdownUsersComponent,
    CardPostDetailComponent,
    CardCommentComponent,
    LoaderComponent,
    PaginationPostComponent
  ],
  imports:[CommonModule, PostsRoutingModule],
  providers:[],
  exports:[]
})
export class PostModule{}
