import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  // srvCreated is a alias and serverCreated is a custom event
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  server_name = "";
  server_content = "";

  @ViewChild('serverContentLR') serverContent!: ElementRef; // serverContent is just a property

  addServer() {
    // console.log(this.serverContent);
    // console.log(this.serverContent.nativeElement.value);
    // console.log(this.serverContent.nativeElement.id);
    this.serverCreated.emit({serverName: this.server_name, serverContent: this.server_content});
  }

  // addServer(sevrerInp: any) {
  //   // console.log(sevrerInp);
  //   console.log(sevrerInp.value);
  // }
  
}
