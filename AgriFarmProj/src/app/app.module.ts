import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from './services/contactService';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Router } from '@angular/router';
import { LoginService } from './services/loginService';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BidderHomeComponent } from './bidder-home/bidder-home.component';
import { ViewMessageComponent } from './view-message/view-message.component';


@NgModule({
  declarations: [
     AppComponent,
     LoginComponent,
     MainHomeComponent,
     AboutUsComponent,
     ContactUsComponent,
     FarmerHomeComponent,
     AdminHomeComponent,
     BidderHomeComponent,
     ViewMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ContactService,LoginService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class AppModule {

  
 }
