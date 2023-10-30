import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  serverDetails = [
    {
      type: 'server', 
      name: 'TestServer', 
      content: 'ContentServer'
    }
  ];

  addNewServer(event: { serverName: any; serverContent: any; }) {
    this.serverDetails.push({type: 'server', name: event.serverName, content: event.serverContent });
  }
  
}
