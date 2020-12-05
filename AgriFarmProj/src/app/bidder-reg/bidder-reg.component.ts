import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { BidderData } from '../models/Bidderdata';

@Component({
  selector: 'app-bidder-reg',
  templateUrl: './bidder-reg.component.html',
  styleUrls: ['./bidder-reg.component.css']
})
export class BidderRegComponent implements OnInit {
bidderdetails : BidderData
  constructor(private http:HttpClient) {
    this.bidderdetails = {
      BidderName: "",
      BidderCity:"",
      BidderAadhar: "",
      BidderAddress: "",
      BidderContactNo: "",
      BidderEmail:"",
      BidderPassword:"",
      BidderPincocde:"",
      BidderState:"",
      BidderTradeLicense:"",
      
      AccountNo:"",
      IFSC_Code:""
    }
  }

    ngOnInit() :void{
    }
  
    OnBidDetails(bidderform:NgForm){
      console.log(bidderform.value);
      const httpheader={headers:new HttpHeaders({'Content-Type':'application/json'})};
      this.http.post('https://localhost:44322/api/bidderreg/',JSON.stringify(bidderform.value),httpheader)
      .subscribe((data)=>
      {console.log(data);
      })
    }  
  
   }

