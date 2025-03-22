import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post, PostComment} from "../../models/post.models";
import {User} from "../../models/users.models";
import {delay, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient){}

  private apiUrl = "https://jsonplaceholder.typicode.com"

  getPosts(){
    return this.http.get<Post[]>(`${this.apiUrl}/posts`).pipe(delay(2200))
  }
  getPostDetail(id:number){
    if(id){
      return this.http.get<Post>(`${this.apiUrl}/posts/${id}`).pipe(delay(2200))
    }
    return of<Post>()
  }
  getPostDetailComments(id:number){
    return this.http.get<PostComment[]>(`${this.apiUrl}/posts/${id}/comments`).pipe(delay(4200))
  }
  getUsers(){
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(delay(2200))
  }
}
