import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloworldComponent } from './demo/helloworld/helloworld.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { BookDataComponent } from './demo/book-data/book-data.component';
import { BookDataRowComponent } from './demo/book-data-row/book-data-row.component';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {environment} from '../environments/environment.prod';
import {UserDataService} from './service/user-data.service';
import { Pattern01Component } from './ui-pattern/pattern01/pattern01.component';
import { Pattern02Component } from './ui-pattern/pattern02/pattern02.component';
import { Pattern03Component } from './ui-pattern/pattern03/pattern03.component';
import { Pattern04Component } from './ui-pattern/pattern04/pattern04.component';
import { Pattern05Component } from './ui-pattern/pattern05/pattern05.component';
import { CommonTestComponent } from './demo/common-test/common-test.component';
import { GradePopupComponent } from './common/grade-popup/grade-popup.component';
import { FormValidComponent } from './demo/form-valid/form-valid.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HelloworldComponent,
    BookDataComponent,
    BookDataRowComponent,
    Pattern01Component,
    Pattern02Component,
    Pattern03Component,
    Pattern04Component,
    Pattern05Component,
    CommonTestComponent,
    GradePopupComponent,
    FormValidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
    HttpClientModule,
    ButtonModule,
    FieldsetModule,
    RadioButtonModule,
    CalendarModule,
    DialogModule,
    environment.production ?
      HttpClientInMemoryWebApiModule.forRoot(UserDataService, {delay: 100}) : [],
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
