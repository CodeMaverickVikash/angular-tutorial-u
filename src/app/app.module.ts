import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { FormsModule } from '@angular/forms';
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { FooterComponent } from './services/footer/footer.component';
import { ServiceHomeComponent } from './services/service-home/service-home.component';
import {HttpClientModule} from '@angular/common/http';
import { PipesComponent } from './pipes/pipes.component';
import {AdminModule} from './admin/admin.module';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsdInrPipe } from './custom-pipes/usd-inr.pipe';
import { RedElementDirective } from './custom-directives/red-element.directive';
import {BetterAttributeDirective} from './custom-directives/better-attribute.directive';
import {UnlessStructure} from './custom-directives/unless-structure.directive';
import { ObservableComponent } from './observable/observable.component';
import { AlertComponent } from './dynamic-component/dynamic-component.component'
import { PlaceholderDirective } from './dynamic-component/placeholder/placeholder.directive';

console.warn('loaded all component, increases burder on website, to remove this issue need to implement lazy loading')

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServerElementComponent,
    CockpitComponent,
    LocalReferenceComponent,
    HomeComponent,
    DirectivesComponent,
    FooterComponent,
    ServiceHomeComponent,
    PipesComponent,
    AdminlistComponent,
    UserlistComponent,
    UsdInrPipe,
    RedElementDirective,
    BetterAttributeDirective,
    UnlessStructure,
    ObservableComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // custom module
    AdminModule // direct import
  ],
  providers: [Title],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule { }
