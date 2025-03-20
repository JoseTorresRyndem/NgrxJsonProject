import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {User} from "../../../../models/users.models";
import {loadedUsers} from "../../../../state/users/users.actions";
import {selectUsersList} from "../../../../state/users/users.selectors";

@Component({
  selector: 'app-dropdown-users',
  templateUrl: './dropdown-users.component.html',
  styleUrls: ['./dropdown-users.component.scss']
})
export class DropdownUsersComponent implements OnInit {

  active: boolean = false;
  users:User[] = []

  constructor(private store:Store) { }
  ngOnInit(): void {
    this.store.dispatch(loadedUsers())
    this.store.select(selectUsersList).subscribe(user=>{
      this.users = user;
    })
  }

  activeDropdown(){
    this.active = !this.active;
  }

}
