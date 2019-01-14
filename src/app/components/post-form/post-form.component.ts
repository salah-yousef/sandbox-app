import { Component, OnInit, ViewChild} from '@angular/core';
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
      this.postService.addPost(value as Post).subscribe(post => {
        console.log(post);
      });
      this.form.reset();
    }
  }
}
