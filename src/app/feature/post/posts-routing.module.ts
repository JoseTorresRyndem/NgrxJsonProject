import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./pages/post-list/post-list.component";
import {PostDetailComponent} from "./pages/post-detail/post-detail.component";

const routes: Routes = [

  {
    path:'',
   component:PostListComponent
  },
  {
    path:':id',
   component:PostDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
