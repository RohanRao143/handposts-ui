import { Component } from '@angular/core';
import { PostService } from './post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'handposts-ui';
  post = '';
  posts = [];

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(res=>{
      this.posts = res.data
    })
  }

  onPost(){
    console.log(this.post)
    this.postService.addPost(this.post).subscribe(post=>{
      console.log(post)
      this.posts.push(post.post)
    })
    this.post = ''
  }

  vote(isLike, id){
    console.log(isLike);
    this.postService.votePost(isLike, id).subscribe(res=>{
      this.posts = this.posts.map(post=>{
        if(id == post.id){
          return res.post
        } else {
          return post
        }
      })
    })
  }


}
