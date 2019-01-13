import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  user = {
    firstName: '',
    lastName: '',
    age: null,
    street: '',
    city: '',
    state: '',
    isOnline:true,
    isHide:true,
    email:'',
    image:"http://lorempixel.com/600/600/people/10"
  };


  constructor() { }

  ngOnInit() {
   
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

  onSubmit({value, valid}: {value:User, valid:boolean}) {
    if (!valid) {
      console.log('form is not valid');
    } else {
      value.isHide = true;
      value.image = "http://lorempixel.com/600/600/people/8";
      value.isOnline = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }
  
}
