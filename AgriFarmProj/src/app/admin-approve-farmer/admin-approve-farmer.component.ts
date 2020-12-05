import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminApproveFarmerService} from '../services/admin-approve-farmer.service';

@Component({
  selector: 'app-admin-approve-farmer',
  templateUrl: './admin-approve-farmer.component.html',
  styleUrls: ['./admin-approve-farmer.component.css']
})
export class AdminApproveFarmerComponent implements OnInit {

  unapprovedfarmers:any=[];
  constructor(private adminapprovefarmerservice: AdminApproveFarmerService,private router: Router) { }

  ngOnInit(): void {
    this.fetchUnapprovedFarmers();
  }

  fetchUnapprovedFarmers(){
    this.unapprovedfarmers=this.adminapprovefarmerservice.GetUnapprovedFarmers().subscribe((data)=>{this.unapprovedfarmers=data;console.log(data)});
    console.log(this.unapprovedfarmers);
  }
  approveFarmer(id){
    let i;
    for(i=0;i<this.unapprovedfarmers.length;i++){
      if(this.unapprovedfarmers[i].Farmerid==id) break;
    }
    console.log(this.unapprovedfarmers[i]);
    this.adminapprovefarmerservice.updateFarmer(this.unapprovedfarmers[i]).subscribe((data)=>{console.log(data)});
    location.reload();
    //this.router.navigate(['ApproveFarmer']);
  }


  




}
