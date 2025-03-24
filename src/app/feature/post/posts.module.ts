import {NgModule} from "@angular/core";
import {PostsRoutingModule} from "./posts-routing.module";
import {PostDetailComponent} from './pages/post-detail/post-detail.component';
import {PostListComponent} from "./pages/post-list/post-list.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations:[
    PostDetailComponent,
    PostListComponent,

  ],
  imports:[CommonModule, PostsRoutingModule, SharedModule],
  providers:[],
  exports:[]
})
export class PostModule{}
