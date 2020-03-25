import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() userFormObj;
  @Input() success;
  @Input() error;

  faError = faExclamationTriangle;
  faSuccess = faCheckCircle;
  constructor() { }

  ngOnInit(): void {
    console.log(this.userFormObj);
  }

}
