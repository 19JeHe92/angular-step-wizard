import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountInfosComponent } from './account-infos/account-infos.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { AddressInfosComponent } from './address-infos/address-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountInfosComponent,
    UserInfosComponent,
    AddressInfosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
