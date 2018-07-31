import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashComponent } from './dash/dash.component';
import { QaComponent } from './qa/qa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    QaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
