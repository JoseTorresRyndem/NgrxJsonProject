import { NgModule } from '@angular/core';
import { PostRoutingModule } from './post-routing.module';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, PostRoutingModule, RouterOutlet],
  exports: [],
})
export class PostModule {}
