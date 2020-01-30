import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';
import { PersonalInformation } from '../personalInformation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private service: BankserviceService, private router: Router) { }

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
    this.service.withdraw(this.personalInformation.customerBalance).subscribe(
      data => { 
        console.log(this.personalInformation.customerBalance)
        console.log(data)
        if(data == 0){
        alert("Insufficient balance")
        }
        else{
        alert("Amount successfully withdrawn. Balance is "+ data)
        //For again navigating back to operations page after doing withdrawl 
        this.router.navigateByUrl('/operations')
      }
  });
}

}
