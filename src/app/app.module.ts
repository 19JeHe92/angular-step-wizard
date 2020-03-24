import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountInfosComponent } from './account-infos/account-infos.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { AddressInfosComponent } from './address-infos/address-infos.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AccountInfosComponent,
    UserInfosComponent,
    AddressInfosComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
