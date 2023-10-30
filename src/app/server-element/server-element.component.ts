import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  // srcElement is the alias to custom property binding
  // Custom property - it is the property 
  @Input('srcElement') element!: { type: string; name: string; content: string; };

}
