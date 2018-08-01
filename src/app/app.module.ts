import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashComponent } from './dash/dash.component';
import { QaComponent } from './qa/qa.component';
import { UserproComponent } from './userpro/userpro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    QaComponent,
    UserproComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
