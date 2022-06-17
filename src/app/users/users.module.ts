import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [UsersTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [UsersTableComponent],
})
export class UsersModule {}
