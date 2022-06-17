import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    city: ['', [Validators.required, Validators.minLength(3)]],
    region: ['', [Validators.required, Validators.minLength(3)]],
    country: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
