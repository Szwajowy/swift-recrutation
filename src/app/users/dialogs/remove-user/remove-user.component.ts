import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/Users.model';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss'],
})
export class RemoveUserComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {}

  ngOnInit(): void {}
}
