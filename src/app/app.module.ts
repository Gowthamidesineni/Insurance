import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { from } from 'rxjs';

import {MenubarModule} from 'primeng/menubar';
import { MenuComponent } from './menu/menu.component';
import { PolicyComponent } from './policy/policy.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RenewComponent } from './policy/renew/renew.component';
import { ViewstatusComponent } from './policy/viewstatus/viewstatus.component';
import { ViewvehicleComponent } from './vehicle/viewvehicle/viewvehicle.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import { MyprofileComponent } from './accounts/myprofile/myprofile.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PolicyComponent,
    VehicleComponent,
    AccountsComponent,
    RenewComponent,
    ViewstatusComponent,
    ViewvehicleComponent,
    LogoutComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,MenubarModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
