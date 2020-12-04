import  {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class AdminApproveClaimService{
    constructor(private http: HttpClient) { }
    GetUnapprovedClaims(){
        //debugger;
        return this.http.get('https://localhost:44365/api/GetUnapprovedClaims/')
    }

    updateClaim(eg){
        const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
        eg.ApprovalStatus="Approved";
        eg.ApprovalAdminId=2;
        console.log(JSON.stringify(eg));
        //put
        //return this.http.post('https://localhost:44365/api/ApproveClaimAdmin/?id='+ eg.Cliamid+'&adminid='+eg.ApprovalAdminId,'');
        //return this.http.post('https://localhost:44365/api/Admin/ApproveFarmer/?id=103&adminid=2','');
        
      }


      
}