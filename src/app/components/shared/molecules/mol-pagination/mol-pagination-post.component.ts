import { Component } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import {
  selectCurrentPage,
  selectTotalItems,
} from '../../../../state/post/post.selectors';
import { Store } from '@ngrx/store';
import { updatePagination } from '../../../../state/post/post.actions';

@Component({
  selector: 'app-pagination',
  templateUrl: './mol-pagination-post.component.html',
  styleUrls: ['./mol-pagination-post.component.scss'],
})
export class PaginationComponent {
  /**
   * currentPage\$ observable to hold the current page number
   */
  currentPage$: Observable<number> = this.store.select(selectCurrentPage);

  /**
   * pageSize variable to store the number of items per page
   */
  pageSize: number = 5;

  /**
   * totalItems\$ observable to hold the total number of items
   */
  totalItems$: Observable<number> = this.store.select(selectTotalItems);

  /**
   * Combine the currentPage$ and totalItems$ observables to create a paginated$ observable
   */
  paginated$ = combineLatest([this.currentPage$, this.totalItems$]).pipe(
    map(([currentPage, totalItems]) => ({ currentPage, totalItems })),
  );
  /**
   * Math object to use mathematical functions
   */
  protected readonly Math = Math;

  constructor(private store: Store) {}

  /**
   * nextPage method to navigate to the next page
   * @param currentPage
   * @param totalItems
   */
  nextPage(currentPage: number, totalItems: number) {
    const totalPages = Math.ceil(totalItems / this.pageSize);
    if (currentPage < totalPages) {
      this.store.dispatch(updatePagination({ page: currentPage + 1 }));
    }
  }

  /**
   * prevPage method to navigate to the previous page
   * @param currentPage
   */
  prevPage(currentPage: number) {
    if (currentPage > 1) {
      this.store.dispatch(updatePagination({ page: currentPage - 1 }));
    }
  }
}
