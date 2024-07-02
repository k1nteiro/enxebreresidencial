import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { OrganizationComponent } from './organization/organization.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    OrganizationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    OrganizationComponent
  ]
})
export class CoreModule { }
