import  {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {FarmerApproval} from '../models/farmerapproval.model';

@Injectable()
export class AdminApproveFarmerService{
    constructor(private http: HttpClient) { }
    GetUnapprovedFarmers(){
        //debugger;
        return this.http.get('https://localhost:44365/api/GetUnapprovedFarmers/')
    }

    updateFarmer(eg){
        const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
        eg.FarmerApproved=true;
        eg.ApprovalAdminId=2;
        console.log(JSON.stringify(eg));
        //put
        return this.http.post('https://localhost:44365/api/ApproveFarmerAdmin/?id='+ eg.Farmerid+'&adminid='+eg.ApprovalAdminId,'');
        //return this.http.post('https://localhost:44365/api/Admin/ApproveFarmer/?id=103&adminid=2','');
        
      }
}