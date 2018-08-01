import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing/app-routing.module';
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
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
