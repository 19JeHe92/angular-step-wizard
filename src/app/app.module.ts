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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { CustomDateAdapter } from './custom-date-adapter';

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
  providers: [
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
    {provide: DateAdapter, useClass: CustomDateAdapter },
    // {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}},
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'L'],
        },
        display: {
          dateInput: 'L',
          monthYearLabel: 'MM YYYY',
          dateA11yLabel: 'L',
          monthYearA11yLabel: 'MM YYYY',
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
