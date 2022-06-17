import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [UsersTableComponent, UsersComponent],
  imports: [CommonModule, MatPaginatorModule, MatSortModule, MatTableModule],
  exports: [UsersComponent],
})
export class UsersModule {}
