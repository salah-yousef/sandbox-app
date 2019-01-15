import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from "../../models/Post";
import { DataService } from "../../services/data.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('post') post:Post; 
  @Input('posts') posts:Post[]; 

  @Output() emittedPost: EventEmitter<Post> = new EventEmitter();
  @Output() emittedFlag: EventEmitter<boolean> = new EventEmitter();

  currentPost: Post = {
    id:0,
    title:'',
    body:''
  }
  currentId: number = null;
  isEdit: boolean = false;
  constructor(
    private postService:DataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id>100) {
      this.router.navigate(['/noUserFound']);
    }else{
      this.postService.getPosts().subscribe(posts => {
        if(id){
          this.currentId = id;
          this.post = posts[id-1];
        }
      })
    }
  }

  editPost(post: Post) {    
    this.currentPost = post;
    this.emittedPost.emit(post);
    this.isEdit = true;
    this.emittedFlag.emit(this.isEdit); 
  }

  removePost(post: Post) {
    if (confirm('are you sure this will delete the post?')) {
      this.postService.deletePost(post.id).subscribe(() => {
        this.posts.forEach((currentPost, i) => {
          if (post.id === currentPost.id) {
            this.posts.splice(i, 1);
          }
        });
      });
    }
  }

}
