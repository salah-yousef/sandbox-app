import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Properties
  @Input('user') user:User;
  isReady:boolean = false;
  // Methods
  constructor() {
    
  } 

  ngOnInit() {
  }

  toggleHide(user:User) {
    this.user.isHide = !this.user.isHide;
  }

  spinner() {
    this.isReady = true;
  }
}
