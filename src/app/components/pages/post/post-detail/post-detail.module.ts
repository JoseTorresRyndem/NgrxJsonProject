import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { PostDetailRoutingModule } from './post-detail-routing.module';
import { AtmLoaderModule } from '../../../shared/atoms/atm-loader/atm-loader.module';
import { MolCardPostDetailModule } from '../../../shared/molecules/mol-card-post-detail/mol-card-post-detail.module';
import { MolCardCommentModule } from '../../../shared/molecules/mol-card-comment/mol-card-comment.module';

@NgModule({
  declarations: [PostDetailComponent],
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    AtmLoaderModule,
    MolCardPostDetailModule,
    MolCardCommentModule,
  ],
  exports: [],
})
export class PostDetailModule {}
