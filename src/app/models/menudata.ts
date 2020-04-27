import {Item, Menu} from "./menu";
import { RouterLink } from '@angular/router';


export const MenuData:Menu[] =[new Menu('Claim','pi pi-fw pi-plus',[new Item('Create','','Claim/Create'),
  new Item('Edit','','Claim/Edit'),
  new Item('View Status','','Claim/View')],'Claim'),

  new Menu('Policy Dashboard','pi pi-fw pi-plus',[
    new Item('Renew','','Policy/Renew'),
    new Item('View Status','','Policy')],'Policy/ViewStatus'),

  new Menu('Vehicle','pi pi-fw pi-plus',[
    new Item('View','','Vehicle/ViewVehicle')],'Vehicle'),



  new Menu('Accounts','pi pi-fw pi-plus',[
    new Item('My Profile','pi pi-user','Accounts/MyProfile'),
    new Item('Logout','pi pi-fw pi-sign-out','Accounts/Logout')
  ],'Accounts'),



]