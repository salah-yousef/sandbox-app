import { Injectable } from '@angular/core';
import { User } from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:User[];

  constructor() {        
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

  getUsers() :User[]{
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
