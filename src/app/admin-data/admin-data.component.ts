import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';
import { PersonalInformation } from '../personalInformation';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent implements OnInit {

  constructor(private service: BankserviceService, private cookie: CookieService, private router: Router) { }

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

 // userInfo: string[];

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      console.log(data)
     // this.userInfo = data
     this.AdminloginInformation = data
    })
  }

  delete(custId){
    this.service.deleteData(custId).subscribe(data => console.log(data));
    this.ngOnInit();
  }

  id:any;
  name: any;

  searched: boolean=false;
  onSubmit(){
   this.searched = true
   this.id = this.AdminloginInformation.customerId;
  }

  goToTop()
   {
      window.scrollTo(0,0);
   }
  
  logout(){
    //Deleting cookies
    this.cookie.delete("custId")
    this.cookie.delete("custPassword")
    this.router.navigateByUrl("/")
  }
}
