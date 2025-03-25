import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostListRoutingModule } from './post-list-routing.module';
import { AtmLoaderModule } from '../../../shared/atoms/atm-loader/atm-loader.module';
import { MolDropdownModule } from '../../../shared/molecules/mol-dropdown/mol-dropdown.module';
import { MolPaginationModule } from '../../../shared/molecules/mol-pagination/mol-pagination.module';
import { MolCardPostModule } from '../../../shared/molecules/mol-card-post/mol-card-post.module';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    PostListRoutingModule,
    AtmLoaderModule,
    MolDropdownModule,
    MolPaginationModule,
    MolCardPostModule,
  ],
  exports: [],
})
export class PostListModule {}
