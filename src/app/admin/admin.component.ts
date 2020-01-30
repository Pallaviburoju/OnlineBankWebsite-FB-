import { Component, OnInit } from '@angular/core';
import { PersonalInformation } from '../personalInformation';
import { BankserviceService } from '../bankservice.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: BankserviceService, private router : Router, private cookie: CookieService) { }

  ngOnInit() {
  }

  AdminloginInformation:PersonalInformation={
    customerId : 0,
    customerName: '',
    customerEmail: '',
    customerPassword: '',
    customerPhoneNumber:'',
    customerAddress:'',
    customerCity: '',
    customerCountry: '',
    customerZip: '',
    customerBalance: 0

  };

  loggedIn = false;
  onSubmit(){
    if(this.AdminloginInformation.customerId == 0 || this.AdminloginInformation.customerPassword == "")
    {
    alert("Enter all fields")
    }

    else{
      this.loggedIn = true;
      //Setting cookie
      this.cookie.set("custId", this.AdminloginInformation.customerId.toString())
      this.cookie.set("custPassword", this.AdminloginInformation.customerPassword.toString())

      return this.service.login(this.AdminloginInformation).subscribe(data => 
        { 
          console.log(data)
          if(data!=0){
        alert("Loggedin successfully with customer id: "+ data)
        this.router.navigateByUrl("/admindata")
          }
          else   alert("Enter valid details")
          
        });
      }
     
  }
}
