import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service'; // importing your service

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  memberData: any;
  constructor(private userData: UserdataService) { 
    this.memberData = userData.data;
  }

  ngOnInit(): void {
  }

}
