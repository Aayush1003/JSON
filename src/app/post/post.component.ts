import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostsComment {
  constructor(http: HttpClientModule) {
    //return http.get('https://jsonplaceholder.typicode.com/posts').subscribe()
  }
}
