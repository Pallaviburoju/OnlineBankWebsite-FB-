import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';
import { PersonalInformation } from '../personalInformation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service : BankserviceService, private router: Router) { }

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

  submitted = false;
  checked = false;

  check(){
    this.checked = true;
  }

  onSubmit(){
    this.submitted = true;

     console.log(this.personalInformation)

      if(this.personalInformation.customerName == " " || this.personalInformation.customerPassword == "" || this.personalInformation.customerPhoneNumber == "" || this.personalInformation.customerZip == "" || this.personalInformation.customerAddress == "" || this.personalInformation.customerCity == "" || this.personalInformation.customerCountry == "" || this.personalInformation.customerEmail == "" || this.checked == false){
        alert("Enter all fields")
      }
      else{
      return this.service.sendData(this.personalInformation).subscribe(data => {
      
        alert("Successfully created with customer id: " + data)
        location.reload(true);
      });
    
  }
  
  }

  
   getCurrentModel() { 
    return JSON.stringify(this.personalInformation); 
  }

}
