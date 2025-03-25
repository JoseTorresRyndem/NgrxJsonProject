import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MolNavbarComponent } from './mol-navbar.component';
import { MolSearchModule } from '../mol-search/mol-search.module';

@NgModule({
  declarations: [MolNavbarComponent],
  imports: [CommonModule, MolSearchModule],
  exports: [MolNavbarComponent],
})
export class MolNavbarModule {}
