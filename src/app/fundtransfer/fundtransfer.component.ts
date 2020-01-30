import { Component, OnInit } from '@angular/core';
import { PersonalInformation } from '../personalInformation';
import { TransactionDetails } from '../transactionDetails';
import { BankserviceService } from '../bankservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {

  constructor(private service : BankserviceService, private router: Router) { }
  
  number;

  ngOnInit() {
    this.service.acc.subscribe(data => this.number = data);
   
  }


  personalInformation : PersonalInformation={
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

  transactionDetails : TransactionDetails = {
    transactionId : 0,
    fromAcc : this.number,
    toAcc : 0,
    amt : 0
  }
  
  onSubmit(){
    
    this.service.fundtransfer(this.transactionDetails).subscribe(
      data => {
        alert("Your transaction id is:"+ data)
        alert("Transaction successful")
      },
      error => {
      alert("Insufficient funds")
      }
      )
      //For again navigating back to operations page after doing transaction
      this.router.navigateByUrl('/operations')
  }

}
