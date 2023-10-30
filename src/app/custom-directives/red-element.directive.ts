import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedElement]'
})
export class RedElementDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'red';
  }

}
