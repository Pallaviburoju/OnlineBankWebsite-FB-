import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PersonalInformation } from './personalInformation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankserviceService {

   //url = 'http://localhost:8909/get'
   url2 = 'http://localhost:8909/register'
   url3 = 'http://localhost:8909/login'
   url4 = 'http://localhost:8909/showbalance'
   url5 = 'http://localhost:8909/deposit'
   url6 = 'http://localhost:8909/withdraw'
   url7 = 'http://localhost:8909/fundtransfer'
   url8 = 'http://localhost:8909/getAll'
   url9 = 'http://localhost:8909/delete'
   
    constructor(private httpService : HttpClient){ }
 
   //  public getData(): Observable<any>{
   //     return this.httpService.get(this.url);
   //  }
   
    acc : Observable<PersonalInformation>;
 
    public sendData( user ){
     return this.httpService.post<PersonalInformation>(this.url2, user);
    }
 
    public login(logindata): Observable<any>{
     this.acc = this.httpService.post<PersonalInformation>(this.url3, logindata)
     return this.acc;
    }
 
    public showbalance(): Observable<any>{
      return this.httpService.get(this.url4);
    }
 
    public deposit(amount):Observable<any>{
      return this.httpService.put(this.url5, amount);
    }
 
    public withdraw(amount):Observable<any>{
       return this.httpService.put(this.url6, amount)
    }
 
    public fundtransfer(transaction):Observable<any>{
       return this.httpService.put(this.url7, transaction)
    }

    public getAll() : Observable<any>{
      return this.httpService.get(this.url8)
    }

    public deleteData(id) : Observable<any>{
      return this.httpService.delete(this.url9 +"/" + id)
    }
}
