import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadPost} from "./state/post/post.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgrxJsonApp';
  constructor(private store:Store) {
    this.store.dispatch(loadPost());

  }


}
