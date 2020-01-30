import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';
import { PersonalInformation } from '../personalInformation';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private service: BankserviceService, private cookie: CookieService, private router: Router) { }

  IscookieExists:boolean = this.cookie.check("custId")

  
  ngOnInit() {
    
  }

  personalInformation:PersonalInformation={
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
    
    this.service.deposit(this.personalInformation.customerBalance).subscribe(
    data => { alert(data+ " rupees is the balance after depositing")});

      alert("Amount deposited successfully")
      //For again navigating back to operations page after depositing
      this.router.navigateByUrl('/operations')
  }

}
