import { Component, OnInit } from '@angular/core';

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
  ];
  dataSource = [
    {
      id: 1,
      name: 'Jan Kowalski',
      email: 'jan.kowalski@gmail.com',
      city: 'Katowice',
      region: 'Śląsk',
      country: 'Polska',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
