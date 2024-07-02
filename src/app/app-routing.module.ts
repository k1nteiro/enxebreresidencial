import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/contact/contact.component';
import { WhoweareComponent } from './modules/whoweare/whoweare.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "whoweare", component: WhoweareComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
