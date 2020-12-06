import  {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {FarmerApproval} from '../models/farmerapproval.model';

@Injectable()
export class BidderMarketPlaceService{
    constructor(private http: HttpClient) { }

    GetCurrentSales(){
        //debugger;
        return this.http.get('https://localhost:44380/api/GetCurrentSales/')
    }
    // GetAllCrops(){
    //     return this.http.get('https://localhost:44365/api/AllCrops/')
    // }

    getCurrentCropById(id){
        return this.http.get('https://localhost:44380/api/GetCropById/?id='+id)
    }

}