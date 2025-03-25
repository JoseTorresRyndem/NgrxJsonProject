import { NgModule } from '@angular/core';
import { DropdownComponent } from './mol-dropdown-users.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule],
  exports: [DropdownComponent],
})
export class MolDropdownModule {}
