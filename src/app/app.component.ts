import { Component, OnInit, ViewChild } from '@angular/core';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('staticTabs', {static: true}) staticTabs: TabsetComponent;
  userForm: FormGroup;
  faCheck = faCheck;
  finished = false;
  success = false;
  error = false;
  onSend = false;
  userFormObj = {};

  tab1Active = true;
  tab2Active = false;
  tab3Active = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
  ) {  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].disabled = false;
    this.staticTabs.tabs[tabId].active = true;
    if (tabId > 0) {
      this.staticTabs.tabs[tabId - 1].customClass = 'wasActive';
    }

    this.success = false;
    this.error = false;
    this.onSend = false;
  }

  onDeSelect(data: TabDirective): void {
    data.customClass = 'wasActive';
  }

  onFinish(tabId: number) {
    this.finished = true;
    this.userFormObj = this.userForm.value;
    this.selectTab(tabId);
  }

  onSubmit() {
    this.onSend = true;
    this.dataService.sendData(this.userForm.value)
      .subscribe(
        (response) => {
          this.success = true;
          this.error = false;
          this.onSend = false;
        },
        (error) => {
          this.success = false;
          this.error = true;
          this.onSend = false;
        });
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      gender: new FormControl(null, Validators.required),
      title: new FormControl(null),
      first: new FormControl(null, Validators.required),
      last: new FormControl(null, Validators.required),
      phone: new FormControl(null),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password1: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        number: new FormControl(null, Validators.required),
        zipCode: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
      }),
    });
  }
}
