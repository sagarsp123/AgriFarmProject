import { Component, OnInit } from '@angular/core';
import {AdminApproveBidderService} from '../services/admin-approve-bidder.service';

@Component({
  selector: 'app-admin-approve-bidder',
  templateUrl: './admin-approve-bidder.component.html',
  styleUrls: ['./admin-approve-bidder.component.css']
})
export class AdminApproveBidderComponent implements OnInit {

  unapprovedbidders:any=[];
  constructor(private adminapprovebiddersService:AdminApproveBidderService) { }

  ngOnInit(): void {
    this.fetchUnapprovedBidders();
  }

  fetchUnapprovedBidders(){
    this.unapprovedbidders=this.adminapprovebiddersService.GetUnapprovedBidders().subscribe((data)=>{this.unapprovedbidders=data;console.log(data)});
    console.log(this.unapprovedbidders);
  }
  approveBidder(id){
    let i;
    for(i=0;i<this.unapprovedbidders.length;i++){
      if(this.unapprovedbidders[i].Bidderid==id) break;
    }
    console.log(this.unapprovedbidders[i]);
    this.adminapprovebiddersService.updateBidder(this.unapprovedbidders[i]).subscribe((data)=>{console.log(data)});;
    
  }

}
