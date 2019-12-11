import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  public getPosts() :Observable<any>{
    return this.http.get('/api/')
  }

  public votePost(vote,id): Observable<any>{
    return this.http.post('/api/vote/'+id,{like:vote})
  }

  public addPost(post):Observable<any>{
    return this.http.post('/api/post',{post:post})
  }
}
