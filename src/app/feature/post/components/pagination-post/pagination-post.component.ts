import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {selectCurrentPage, selectTotalItems} from "../../../../state/post/post.selectors";
import {Store} from "@ngrx/store";
import {updatePagination} from "../../../../state/post/post.actions";

@Component({
  selector: 'app-pagination-post',
  templateUrl: './pagination-post.component.html',
  styleUrls: ['./pagination-post.component.scss']
})
export class PaginationPostComponent  {
  totalItems$: Observable<number> = this.store.select(selectTotalItems);
  currentPage$: Observable<number> = this.store.select(selectCurrentPage);
  pageSize: number = 5;

  constructor(private store:Store) { }

  nextPage(currentPage: number , totalItems: number ) {
    const totalPages = Math.ceil(totalItems / this.pageSize);
    if (currentPage < totalPages) {
      this.store.dispatch(updatePagination({ page: currentPage + 1 }));
    }
  }

  prevPage(currentPage: number) {
    if (currentPage > 1) {
      this.store.dispatch(updatePagination({ page: currentPage - 1 }));
    }
  }

  protected readonly Math = Math;
}
