import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { BlogComponent } from '../main/blog/blog.component';
import { PostComponent } from "../main/post/post.component";

import { UserRoutingModule } from './user-routing.module';


 
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [
    BlogComponent,
    PostComponent,
  ]
})
export class UserModule {}