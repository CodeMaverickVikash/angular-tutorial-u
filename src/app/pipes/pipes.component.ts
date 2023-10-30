import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  title = "Angular basic pipes";
  today = Date();

  user = {
    name: 'vikash',
    age: '22',
    address: "No"
  }
}
