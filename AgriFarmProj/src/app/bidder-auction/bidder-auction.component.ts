import { Component, OnInit } from '@angular/core';
import {BidderMarketPlaceService} from '../services/bidder-marketplace.service';

@Component({
  selector: 'app-bidder-auction',
  templateUrl: './bidder-auction.component.html',
  styleUrls: ['./bidder-auction.component.css']
})
export class BidderAuctionComponent implements OnInit {



  currentcrop:any=[];
  AuctionId=sessionStorage.getItem("auctionid");
  constructor(private biddermarketplaceservice:BidderMarketPlaceService) { }

  ngOnInit(): void {
  }
  fetchauctiondetails(){
    this.currentcrop=this.biddermarketplaceservice.getCurrentCropById(this.AuctionId).subscribe((data)=>{
      this.currentcrop=data;console.log(data)
    });
    console.log(this.currentcrop);
  }

}
