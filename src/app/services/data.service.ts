import { Injectable } from '@angular/core';
import { User } from "../models/User";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Post } from "../models/Post";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(
    private http: HttpClient
  ) {        
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        street: '50 Main st',
        city: 'Boston',
        state: 'MAI',
        isOnline:true,
        isHide:true,
        email:'John.Doe@gmail.com',
        image:"http://lorempixel.com/600/600/people/9"
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        street: '20 School st',
        city: 'Lynn',
        state: 'MA',
        isOnline:false,
        isHide:true,
        email:'kevin.Johnson@gmail.com',
        image:"http://lorempixel.com/600/600/people/6"
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        street: '55 Mill st',
        city: 'Miami',
        state: 'FL',
        isOnline:false,
        isHide:true,
        email:'Karen.Williams@gmail.com',
        image:"http://lorempixel.com/600/600/people/3"
      }
    ];
  }

  getUsers() :Observable<User[]>{
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getPosts() :Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }

  addPost(post:Post) :Observable<Post>{
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  editPost(post:Post) :Observable<Post>{
    return this.http.put<Post>(this.postsUrl+post.id, post, httpOptions);
  }

  deletePost(id: number) :Observable<Post>{
    return this.http.delete<Post>(this.postsUrl+id,httpOptions);
  }
}
