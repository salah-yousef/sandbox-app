import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/Post";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id:0,
    title:'',
    body:''
  };

  constructor(private postService:DataService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  onEmittedPost(post: Post) {
    this.currentPost = post;
  }

}
