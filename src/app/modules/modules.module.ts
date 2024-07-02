import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ContactComponent,
    WhoweareComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
