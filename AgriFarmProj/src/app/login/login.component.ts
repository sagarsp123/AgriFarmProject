import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/loginModel';
import { LoginService } from '../services/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login;

  constructor(private log:LoginService,private router:Router) { 
    this.login={
      Email:"",
      Password:"",
      UserType:""
    }
  }

  OnLogin(loginform:NgForm){
    console.log(loginform.value);
    this.log.checkLogin(loginform).subscribe((data)=>
     {
       if(data["Item1"]=="admin"){
      alert("Hello admin!");
      this.router.navigate(['AdminHome']);
      sessionStorage.setItem('email',data["Item2"]);
      sessionStorage.setItem('user',data["Item1"]);
      
    }
    else if(data["Item1"]=="farmer"){
      alert("Hello farmer!");
      this.router.navigate(['FarmerHome']);
      sessionStorage.setItem('email',data["Item2"]);
      sessionStorage.setItem('user',data["Item1"]);
    }
    else if(data["Item1"]=="bidder"){
      alert("Hello bidder!");
      this.router.navigate(['BidderHome']);
      sessionStorage.setItem('email',data["Item2"]);
      sessionStorage.setItem('user',data["Item1"]);
    }
    else if(data["Item1"]=="wrong credentials"){
      alert("Invalid Credentials!");
    }
    else{
       alert("User not registered!");
    }
     });

    
  }

  ngOnInit(): void {
  }

}
