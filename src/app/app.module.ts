import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { OperationsComponent } from './operations/operations.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { SearchComponent } from './search/search.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DepositComponent,
    WithdrawComponent,
    FundtransferComponent,
    OperationsComponent,
    NavbarComponent,
    AdminComponent,
    AdminDataComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'navbar', component: NavbarComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'deposit', component: DepositComponent, canActivate : [AuthGuard] },
      {path: 'withdraw', component: WithdrawComponent, canActivate : [AuthGuard]}, 
      {path: 'fundtransfer', component: FundtransferComponent, canActivate : [AuthGuard]},
      {path: 'operations', component: OperationsComponent, canActivate : [AuthGuard]},
      {path: 'admin', component: AdminComponent},
      {path: 'admindata', component: AdminDataComponent, canActivate : [AuthGuard]}
    ])
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
