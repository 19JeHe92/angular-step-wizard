import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountInfosComponent } from './account-infos/account-infos.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule, TooltipModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountInfosComponent,
    UserInfosComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
