import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable()
export class LoginService{
    constructor(private http:HttpClient){

    }
    checkLogin(loginform:NgForm){
        const httpheader={headers:new HttpHeaders({'Content-Type':'application/json'})};
        //debugger;
        return this.http.post("https://localhost:44329/checkLogin/",JSON.stringify(loginform.value),httpheader);
    }
}