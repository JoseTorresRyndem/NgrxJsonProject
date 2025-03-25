import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../../models/users.models';
import { loadedUsers } from '../../../../state/users/users.actions';
import { selectUsersList } from '../../../../state/users/users.selectors';
import { Observable } from 'rxjs';
import { selectLoadingState } from '../../../../state/post/post.selectors';

@Component({
  selector: 'app-dropdown',
  templateUrl: './mol-dropdown-users.component.html',
  styleUrls: ['./mol-dropdown-users.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Output() userSelectedEmmit: EventEmitter<number> =
    new EventEmitter<number>();

  /**
   * Active state of the dropdown
   * */
  active: boolean = false;

  /**
   * User to store the list of users
   * */
  users$: Observable<User[]> = this.store.select(selectUsersList);

  isLoading$: Observable<boolean> = this.store.select(selectLoadingState);
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

    this.userSelectedEmmit.emit(user.id);
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
   * HostListener to close the list when clicking outside of it
   * */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('#DropdownUsersContainer')) {
      this.active = false;
    }
  }
  /**
   * HostListener to close the list when press key escape
   * */
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.active = false;
    }
  }
}
