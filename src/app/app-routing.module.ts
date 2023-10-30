import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ObservableComponent } from './observable/observable.component';
import { ServiceHomeComponent } from './services/service-home/service-home.component';

const routes: Routes = [
  {
    path: 'lazyCustomer', loadChildren: () => import('./lazy-customer-module/lazy-customer-module.module').then(mod => mod.LazyCustomerModuleModule)
    // loadChildren attribute means lazy module loading
  },
  {path: 'cockpit', component: CockpitComponent},
  {path: '', component: ObservableComponent},
  {path: 'serviceHomeComponent', component: ServiceHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
