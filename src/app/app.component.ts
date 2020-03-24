import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {  }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      gender: new FormControl(null, Validators.required),
      first: new FormControl(null, Validators.required),
      last: new FormControl(null, Validators.required),
      phone: new FormControl(null),
      email: new FormControl(null, Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      address: new FormGroup({
        street: new FormControl(null),
        number: new FormControl(null),
        zipCode: new FormControl(null),
        city: new FormControl(null),
        country: new FormControl(null),
      }),
    });
  }
}
