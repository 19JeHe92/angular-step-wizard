import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfosComponent } from './account-infos.component';

describe('AccountInfosComponent', () => {
  let component: AccountInfosComponent;
  let fixture: ComponentFixture<AccountInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
