import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyCustomerModuleRoutingModule } from './lazy-customer-module-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

// don't import directly this file in anywhere
console.warn('lazy loading module');

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LazyCustomerModuleRoutingModule
  ]
})
export class LazyCustomerModuleModule { }
