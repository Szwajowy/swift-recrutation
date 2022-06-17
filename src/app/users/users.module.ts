import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [UsersTableComponent, UsersComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  exports: [UsersComponent],
})
export class UsersModule {}
