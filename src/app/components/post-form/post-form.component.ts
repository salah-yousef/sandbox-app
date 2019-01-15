import { Component, OnInit, ViewChild, EventEmitter, Output, Input} from '@angular/core';
import { Post } from "../../models/Post";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Post = {
    id:0,
    title:'',
    body:''
  };
  @Input() currentPost: Post;
  @Input() postFlag: boolean;
  
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatePost: EventEmitter<Post> = new EventEmitter();

  @ViewChild('postForm') form: any;
  constructor(
    private postService:DataService
  ) { }

  ngOnInit() {
  }

onSubmit({value, valid}: {value:Post, valid:boolean}) {
    if (!valid) {
      console.log('form is not valid');
    } else {
      if (this.postFlag) {
        this.postService.editPost(value as Post).subscribe(post => {
          this.postFlag = false;
          this.updatePost.emit(post);
          this.form.resetForm(this.post);
        })
      } else {
        this.postService.addPost(value as Post).subscribe(post => {
          this.newPost.emit(post);
          this.form.resetForm(this.post);
        });  
      }
    }
  }
}
