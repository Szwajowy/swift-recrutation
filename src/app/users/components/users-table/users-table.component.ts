import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../../models/Users.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'city',
    'region',
    'country',
    'actions',
  ];
  dataSource = new MatTableDataSource<User>();
  pageSizeOptions: number[] = [10, 25, 50];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @Input() set data(data: User[]) {
    this.dataSource.data = data;
  }

  @Output() removeUser: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onRemoveUser(id: number): void {
    this.removeUser.emit(id);
  }
}
