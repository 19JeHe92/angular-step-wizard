import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss']
})
export class UserInfosComponent implements OnInit {
  @Input() parentForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  showHint = false;
  genders = [
    {
      name: 'Herr',
      value: 'male'
    },
    {
      name: 'Frau',
      value: 'female'
    },
    {
      name: 'Divers',
      value: 'divers'
    }
  ];
  titles = [
    {
      name: '',
      value: ''
    },
    {
      name: 'Dr.',
      value: 'dr'
    },
    {
      name: 'Prof.',
      value: 'prof'
    },
    {
      name: 'Prof. Dr.',
      value: 'prof dr'
    }
  ];
  countries = [
    {
      name: 'Deutschland',
      value: 'DE'
    },
  ];
  constructor() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    // Set the maximum to 100 years in the past (means the user have to be max 100years).
    this.minDate = new Date(currentYear - 100, currentMonth, currentDay);
    // Set the maximum to 16 years in the past (means the user have to be min 16years).
    this.maxDate = new Date(currentYear - 16, currentMonth, currentDay);
  }

  ngOnInit(): void {
  }

}
