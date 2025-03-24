import {NgModule} from "@angular/core";
import {LoaderComponent} from "./loader/loader.component";
import {NavbarComponent} from './navbar/navbar.component';
import {SearchComponentComponent} from './search/search-component.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DropdownUsersComponent} from "./dropdown/dropdown-users.component";
import {PaginationPostComponent} from "./pagination/pagination-post.component";
import {CardCommentComponent} from "./card-comment/card-comment.component";
import {CardPostComponent} from "./card-post/card-post.component";
import {CardPostDetailComponent} from "./card-post-detail/card-post-detail.component";

@NgModule({
  declarations: [
    LoaderComponent,
    NavbarComponent,
    SearchComponentComponent,
    DropdownUsersComponent,
    PaginationPostComponent,
    CardPostComponent,
    CardPostDetailComponent,
    CardCommentComponent
  ],
  imports: [FormsModule, CommonModule],
  exports: [
    LoaderComponent,
    NavbarComponent,
    DropdownUsersComponent,
    PaginationPostComponent,
    CardPostComponent,
    CardPostDetailComponent,
    CardCommentComponent
  ]
})
export class SharedModule {}
