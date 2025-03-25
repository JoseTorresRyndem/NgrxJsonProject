import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './mol-pagination-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, FormsModule],
  exports: [PaginationComponent],
})
export class MolPaginationModule {}
