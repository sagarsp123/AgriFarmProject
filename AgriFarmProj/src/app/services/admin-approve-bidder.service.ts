import  {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {BidderApproval} from '../models/bidderapproval.model';

@Injectable()
export class AdminApproveBidderService{
    constructor(private http: HttpClient) { }
    GetUnapprovedBidders(){
        //debugger;
        return this.http.get('https://localhost:44365/api/GetUnapprovedBidders/')
    }

    updateBidder(eg){
        const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
        eg.BidderApproved=true;
        eg.ApprovalAdminId=2;
        console.log(JSON.stringify(eg));
        //put
        return this.http.post('https://localhost:44365/api/ApproveBidderAdmin/?id='+ eg.Bidderid+'&adminid='+eg.ApprovalAdminId,'');        
      }
}