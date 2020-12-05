import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminApproveClaimService} from '../services/admin-approve-claim.service';

@Component({
  selector: 'app-admin-approve-claim',
  templateUrl: './admin-approve-claim.component.html',
  styleUrls: ['./admin-approve-claim.component.css']
})
export class AdminApproveClaimComponent implements OnInit {

  unapprovedclaims:any=[];
  insurancelist:any=[];
  constructor(private adminapproveclaimservice:AdminApproveClaimService,private router:Router) { }

  ngOnInit(): void {
    this.fetchUnapprovedClaims();
  }


  fetchUnapprovedClaims(){
    this.unapprovedclaims=this.adminapproveclaimservice.GetUnapprovedClaims().subscribe((data)=>{this.unapprovedclaims=data;console.log(data)});
    console.log(this.unapprovedclaims);
  }


  approveClaim(id){
    let i;
    for(i=0;i<this.unapprovedclaims.length;i++){
      if(this.unapprovedclaims[i].Cliamid==id) break;
    }
    console.log(this.unapprovedclaims[i]);
    //this.adminapproveclaimservice.updateClaim(this.unapprovedclaims[i]);
    //this.router.navigate(['ApproveClaim']);
    this.adminapproveclaimservice.updateClaim(this.unapprovedclaims[i]).subscribe((data)=>{console.log(data)});
    location.reload();
  }


}


