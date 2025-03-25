import { NgModule } from '@angular/core';
import { SearchComponent } from './mol-search-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchComponent],
})
export class MolSearchModule {}
