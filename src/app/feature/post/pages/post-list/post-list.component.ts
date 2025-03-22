import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadPost, postListUserId} from "../../../../state/post/post.actions";
import {selectLoadingState, selectPostList} from "../../../../state/post/post.selectors";
import {Post} from "../../../../models/post.models";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  isLoading$:Observable<boolean> = this.store.select(selectLoadingState)
  paginatedItems: Post[] = []; // Lista de elementos paginados
  pageSize: number = 8;
  currentPage: number = 1;
  totalItems: number = 0;
  postList: Post[] = [];
  constructor(private store:Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(loadPost())
    this.store.select(selectPostList).subscribe(post=>{
      this.totalItems = post.length;
      this.postList = post;
      this.updatePagination(post);
    });
  }

  updatePagination(items: Post[]) {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedItems = items.slice(start, end);
  }
  nextPage(items: any[]) {
    if (this.currentPage < Math.ceil(this.totalItems / this.pageSize)) {
      this.currentPage++;
      this.updatePagination(items);
    }
  }

  prevPage(items: any[]) {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination(items);
    }
  }
  onUserSelected(id: number) {
    this.store.dispatch(postListUserId({userId:id}))
  }

  detailPost(post: Post) {
    this.router.navigate(['/posts', post.id]);

  }

  protected readonly Math = Math;
}
