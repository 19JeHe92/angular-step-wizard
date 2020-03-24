import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-infos',
  templateUrl: './account-infos.component.html',
  styleUrls: ['./account-infos.component.scss']
})
export class AccountInfosComponent implements OnInit {
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
