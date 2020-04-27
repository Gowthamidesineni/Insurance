import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PolicyComponent } from './policy/policy.component';
import { RenewComponent } from './policy/renew/renew.component';
import { ViewstatusComponent } from './policy/viewstatus/viewstatus.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ViewvehicleComponent } from './vehicle/viewvehicle/viewvehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MyprofileComponent } from './accounts/myprofile/myprofile.component';
import { LogoutComponent } from './accounts/logout/logout.component';


const routes: Routes = [{
  path:'Menu',
  component:MenuComponent,
  //lazy loading
  children:[{
    path:'Claim',
    loadChildren:()=>import('./claim/claim.module')
    .then(m=>m.ClaimModule)
  },
  {
    path:'Policy',
    component:PolicyComponent,
    children:[{
      path:'Renew',
      component:RenewComponent
    },
  {
    path:'ViewStatus',
    component:ViewstatusComponent
  }
  ]
  },
  {
    path:'Vehicle',
    component:VehicleComponent,
    children:[{
      path:'ViewVehicle',
      component:ViewvehicleComponent
    }]
  },
  {
    path:'Accounts',
    component:AccountsComponent,
    children:[{
      path:'MyProfile',
      component:MyprofileComponent
    },
  {
    path:'Logout',
    component:LogoutComponent
  }]
  }
]
},{ path: '', redirectTo: '/Menu', pathMatch: 'full' },
{ path: '**', redirectTo: '/Menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
