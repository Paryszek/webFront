import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data: any;
  posts: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = this.getPosts();
    this.data.map((res: Response) => res).subscribe(val => this.posts = val);
  }
  getPosts(): any{
    return this.http.get<any>('http://localhost:8080/posts');
  }
}
