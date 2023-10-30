import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent {

  // getValues(email: HTMLInputElement, pass: HTMLInputElement) {
  //   console.log(email.value, pass.value);
  //   email.value = ""; pass.value = "";
  // }

  @ViewChild('email') email!: ElementRef;
  @ViewChild('pass') pass!: ElementRef;
  
  getValues() {
    console.log(this.email.nativeElement.value, this.pass.nativeElement.value);
  }


  // Lifecycle hook in angular
}
