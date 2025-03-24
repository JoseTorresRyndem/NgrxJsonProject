import {NgModule} from "@angular/core";
import {LoaderComponent} from "./loader/loader.component";
import {NavbarComponent} from './navbar/navbar.component';
import {SearchComponentComponent} from './search/search-component.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DropdownUsersComponent} from "./dropdown/dropdown-users.component";
import {PaginationPostComponent} from "./pagination/pagination-post.component";

@NgModule({
  declarations: [LoaderComponent, NavbarComponent, SearchComponentComponent,    DropdownUsersComponent,PaginationPostComponent],
  imports: [FormsModule, CommonModule],
  exports: [LoaderComponent,NavbarComponent,DropdownUsersComponent,PaginationPostComponent]
})
export class SharedModule {}
