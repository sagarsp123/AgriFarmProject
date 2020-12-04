import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotomsg(){
    this.router.navigate(['ViewMessage']);
  }
  gotoaprrovefarmer(){
    this.router.navigate(['ApproveFarmer']);
  }
  gotoaprrovebidder(){
    this.router.navigate(['ApproveBidder']);
  }
  gotoaprrovecrop(){
    this.router.navigate(['ApproveCrop']);
  }
  gotoaprroveclaim(){
    this.router.navigate(['ApproveClaim']);
  }
  gotoaprroveauction(){
    this.router.navigate(['ViewMessage']);
  }
}
