import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../models/post.models";
import {User} from "../../models/users.models";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient){}


  getPosts(){
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
  getUsers(){
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }
}
