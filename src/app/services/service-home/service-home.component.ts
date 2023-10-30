import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-service-home',
  templateUrl: './service-home.component.html',
  styleUrls: ['./service-home.component.css']
})
export class ServiceHomeComponent implements OnInit {

  memberData: any;
  news: any;

  constructor(private userData: UserdataService) {
      // console.log(userData.users());
      // this.memberData = userData.users();
      

      // Subscribe: it tells us data of api call, you can use it in this component.
      userData.userApi().subscribe((data)=> {
        this.news = data;
        this.news = this.news.articles;
      });

      userData.jsonApi().subscribe((data)=> {
        console.log(data);
      })
  }

  ngOnInit(): void { }

  clicked() {
    this.news.forEach((element: any) => {
      console.log(element);
    });
  }

  getUserDetails(data: any) {
    console.log(data);
    this.userData.saveUsers(data).subscribe((results)=> {
      console.log(results);
    })
  }

}
