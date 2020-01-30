import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankserviceService } from '../bankservice.service';
import { PersonalInformation } from '../personalInformation';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: BankserviceService, private cookie: CookieService) { }

  ngOnInit() {
  }

  loggedIn : boolean=false;

  loginInformation:PersonalInformation={
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


  onSubmit(){
  
    if(this.loginInformation.customerId == 0 || this.loginInformation.customerPassword == "")
    {
    alert("Enter all fields")
    }

    else{
      this.loggedIn = true;
      //Setting cookie
      this.cookie.set("custId", this.loginInformation.customerId.toString())
      this.cookie.set("custPassword", this.loginInformation.customerPassword.toString())
      return this.service.login(this.loginInformation).subscribe(data => 
        { 
          console.log(data)
          if(data!=0){
        alert("Loggedin successfully with customer id: "+ data)

        this.router.navigateByUrl("/operations")
          }
          else   alert("Enter valid details")
          
        });
      }
  }

}
