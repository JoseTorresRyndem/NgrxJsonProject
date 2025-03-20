import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path:'posts',
    loadChildren:()=>import('./feature/post/posts.module').then(m=>m.PostModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./feature/users/users.module').then(m => m.UsersModule)
  },
  {
    path: '**',
    redirectTo: 'posts',
    pathMatch:'full'
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
