import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {debounceTime, Observable, Subject, Subscription} from "rxjs";
import {selectPostList} from "../../state/post/post.selectors";
import {Post} from "../../models/post.models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit,OnDestroy {
/**
 * active boolean to track the active state of the search
 */
active:boolean = false;

/**
 * filteredItems array to store the filtered posts
 */
filteredItems: Post[] = [];

/**
 * items$ observable to hold the list of posts
 */
items$: Observable<Post[]> = this.store.select(selectPostList);

/**
 * posts array to store all posts
 */
posts: Post[] = [];

/**
 * postSubscription to manage the subscription to the posts observable
 */
postSubscription!: Subscription;

/**
 * searchSubject subject to handle search debounce
 */
searchSubject = new Subject<void>();

/**
 * searchTerm variable to store the search input
 */
searchTerm: string = '';

constructor(private store: Store,private route:Router) { }


ngOnInit(): void {
  this.postSubscription = this.items$.subscribe(posts => {
    this.posts=posts;
  });
  this.searchSubject.pipe(debounceTime(600)).subscribe(() => {
    this.filteredItems = this.filterPosts(this.posts, this.searchTerm);
    this.active = this.searchTerm.length > 0;
  });
}

ngOnDestroy(): void {
  this.searchSubject.unsubscribe();
  this.postSubscription.unsubscribe();
}

/**
 * filterList method to trigger the search
 */
filterList() {
  this.searchSubject.next();
}

/**
 * filterPosts method to filter the posts based on the search term
 * @param posts
 * @param searchTerm
 */
filterPosts(posts: Post[], searchTerm: string): Post[] {
  const lowerCaseTerm = searchTerm.toLowerCase();
  return posts.filter(item =>
    item.title.toLowerCase().includes(lowerCaseTerm) ||
    item.body.toLowerCase().includes(lowerCaseTerm)
  );
}

/**
 * seeDetailsPost method to navigate to the detail page of the post
 * @param id
 */
seeDetailsPost(id: number) {
  this.active = false
  this.searchTerm = ''
  this.route.navigate(['/posts', id]);
}

/**
 * HostListener to close the dropdown when clicking outside of it
 * @param event
 */
@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (!target.closest('#Search')) {
    this.active = false;
  }
}

/**
 * HostListener to close the dropdown when press key escape
 * @param event
 */
@HostListener('document:keydown', ['$event'])
onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    this.active = false;
  }
}
}
