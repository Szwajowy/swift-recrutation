import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [UsersTableComponent, UsersComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
  ],
  exports: [UsersComponent],
})
export class UsersModule {}
