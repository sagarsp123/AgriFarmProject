import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable()
export class MailService{
    url="https://localhost:44365/api/mail/"; 

    constructor(private http:HttpClient){

    }

    sendMail(mail:NgForm){
        console.log(mail.value);
        const httpheader={headers:new HttpHeaders({'Content-Type':'application/json'})};
        return this.http.post(this.url,JSON.stringify(mail.value),httpheader);
    }

    changestatus(mail:string,id:string){
        const httpheader={headers:new HttpHeaders({'Content-Type':'application/json'})};
        //debugger;
        return this.http.put(this.url+"?mail="+mail+"&id="+id,httpheader);
    }
}