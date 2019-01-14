import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../../services/data.service";
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
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    street: '',
    city: '',
    state: '',
    isOnline:true,
    isHide:true,
    email:'',
    image:''
  };


  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onSubmit({value, valid}: {value:User, valid:boolean}) {
    if (!valid) {
      console.log('form is not valid');
    } else {
      value.isHide = true;
      value.image = "http://lorempixel.com/600/600/people/8";
      value.isOnline = true;
      this.dataService.addUser(value);
      this.form.reset();
    }
  }
  
}
