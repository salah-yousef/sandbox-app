import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from "../../models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('post') post:Post; 

  @Output() emittedPost: EventEmitter<Post> = new EventEmitter();

  currentPost: Post = {
    id:0,
    title:'',
    body:''
  }
  constructor() { }

  ngOnInit() {
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.emittedPost.emit(post);
  }

}
