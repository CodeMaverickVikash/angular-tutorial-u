import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  styles: [`
      .online {
        background-color: black;
        color: white;
      }
  `]
})
export class DirectivesComponent {

  onlyOdd = false;

  numbers = [1, 2, 3, 4, 5];
  evenNumber = [2, 4];
  oddNumber = [1, 3, 5]
  message = 'Show odd';

  toggleMessage(m: string) {
    if(m === 'Show odd') {
      this.message = 'Close odd';
    } else {
      this.message = 'Show odd';
    }
  }


  serverName = '';
  serverCreated = false;
  addServer() {
    this.serverName = "Server created";
    this.serverCreated = true;
  }

  serverStatus = false;

  getColor() {
    return this.serverStatus ? 'green' : 'red';
  }

}
