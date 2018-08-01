import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from '../dash/dash.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { QaComponent } from '../qa/qa.component';
import { UserproComponent } from '../userpro/userpro.component';
import { UserloginComponent } from '../userlogin/userlogin.component';

const routes: Routes = [
  {
    path: "dash",
    component: DashComponent
  },
  {
    path: "qa",
    component: QaComponent
  },
  {
    path: "userpro",
    component: UserproComponent
  },
  {
    path: "userlogin",
    component: UserloginComponent
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
