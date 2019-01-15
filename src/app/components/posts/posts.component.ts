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

  isEdit: boolean = false;

  constructor(private postService:DataService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts.slice(0,5);
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  onEmittedPost(post: Post) {
    this.currentPost = post;
  }

  onEmittedFlag(flag: boolean) {
    this.isEdit = flag;
  }

  onUpdatePost(post: Post) {
    this.posts.forEach((currentPost, i) => {
      if (post.id === currentPost.id) {
        this.posts.splice(i, 1);
        this.posts.unshift(post);
        this.isEdit = false;
      }
    });
  }
}
