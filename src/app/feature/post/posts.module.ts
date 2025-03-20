import {NgModule} from "@angular/core";
import {PostsRoutingModule} from "./posts-routing.module";
import {PostDetailComponent } from './pages/post-detail/post-detail.component';
import {PostListComponent} from "./pages/post-list/post-list.component";
import {CommonModule} from "@angular/common";
import { CardPostComponent } from './components/card-post/card-post.component';
import { DropdownUsersComponent } from './components/dropdown-users/dropdown-users.component';

@NgModule({
  declarations:[
    PostDetailComponent,
    PostListComponent,
    CardPostComponent,
    DropdownUsersComponent
  ],
  imports:[CommonModule, PostsRoutingModule],
  providers:[],
  exports:[]
})
export class PostModule{}
