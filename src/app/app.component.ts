import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ServerElementComponent } from './server-element/server-element.component';
import {dataType} from './userModel';
import {ViewContainerRef, ComponentFactoryResolver} from '@angular/core'; // for lazy compenent loading
import { AlertComponent } from './dynamic-component/dynamic-component.component'
import { PlaceholderDirective } from './dynamic-component/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  data: dataType = {
    id: 1,
    name: 'vikash',
    indian: true,
    address: '23 noida'
  }

  // constructor(private titleService: Title) {
  //   titleService.setTitle('Angular Udemy')
  // }

  // viewContainer is the object of ViewContainerRef
  constructor(private viewContainer: ViewContainerRef, private cfr: ComponentFactoryResolver ) {}

  

  addressHome = 'home'; // by-default it show home
  addressLR!: string; 
  dir: any;

  selectHome(addressHome: string) {
    this.addressHome = 'home';
    this.addressLR = "";
    this.dir = '';
  }

  selectLR(addressLR: string) {
    this.addressLR = 'local-reference';
    this.addressHome = '';
    this.dir = '';
  }

  selectDir(dir: any) {
    this.dir = 'directives';
    this.addressHome = '';
    this.addressLR = '';
  }


  name = "vikash";
  disable = false;

  ngOnDestroy() {
    if(this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }


  // Lazy component loading
  async loadAdminlist() {
    console.log('Lazy loading of adminlist component');
    this.viewContainer.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(AdminlistComponent));
  }

  async loadUserlist() {
    console.log('Lazy loading of userlist component');
    this.showErrorAlert('Error occured during processing your request!');
    this.viewContainer.clear();
    const {UserlistComponent} = await import('./userlist/userlist.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(UserlistComponent));
  }

  onlyOdd: boolean = false;
  tgl() {
    this.onlyOdd = !this.onlyOdd;
  }

  @ViewChild(PlaceholderDirective) alertHost!: PlaceholderDirective;
  private closeSub!: Subscription;

  public showErrorAlert(message: string) {
    const alertCmpFactory = this.cfr.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.vcRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }
}
