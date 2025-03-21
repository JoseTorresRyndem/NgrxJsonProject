import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {User} from "../../../../models/users.models";
import {loadedUsers} from "../../../../state/users/users.actions";
import {selectUsersList} from "../../../../state/users/users.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dropdown-users',
  templateUrl: './dropdown-users.component.html',
  styleUrls: ['./dropdown-users.component.scss']
})
export class DropdownUsersComponent implements OnInit {
  @Output() userSelectedEmmit:EventEmitter<number> = new EventEmitter<number>();

  /**
   * Active state of the dropdown
   * */
  active: boolean = false;

  /**
  * User to store the list of users
  * */
  users: Observable<User[]> = this.store.select(selectUsersList);
  /**
   * userSelected to store the list of users
   * */
  userSelected!: string | null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadedUsers());

  }

  /**
   * activeDropdown method to toggle the dropdown's active state
   * */
  activeDropdown() {
  this.active = !this.active;
}

  /**
   * selectUser method to select a user from the dropdown
   * */
  selectUser(user: User) {
    if (user.username === this.userSelected) return;
    this.active = false;
    this.userSelected = user.username;

    this.userSelectedEmmit.emit(user.id)
  }


/**
 * unSelectUser method to unselect the currently selected user
 * and reset the dropdown state
 */
unSelectUser() {
  this.userSelected = null;
  this.active = false;
  this.userSelectedEmmit.emit(0);
}

  /**
   * HostListener to close the dropdown when clicking outside of it
   * */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('#DropdownUsersContainer')) {
      this.active = false;
    }
  }
  /**
   * HostListener to close the dropdown when press key escape
   * */
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.active = false;
    }
  }
}
