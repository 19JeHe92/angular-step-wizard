import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss']
})
export class UserInfosComponent implements OnInit {
  @Input() parentForm: FormGroup;
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
  constructor() { }

  ngOnInit(): void {
  }

}
