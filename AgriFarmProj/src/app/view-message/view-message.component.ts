import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contactService';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent implements OnInit {
  msg:any=[];
  constructor(private cot:ContactService) { }

  ngOnInit(): void {
    this.FetchMsg();
  }

  FetchMsg(){
    this.msg=this.cot.getMessage().subscribe((data)=>{this.msg=data;});
  }

}
