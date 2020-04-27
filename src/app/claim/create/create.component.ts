import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }
  claimTypes: MenuItem[];

  ngOnInit() {
    this.claimTypes = [
      {label: 'Loss', icon: 'pi pi-minus', routerLink:'Loss'},
      {label: 'Damage', icon: 'pi pi-items', routerLink:'Damage'}
  ]
  }

}
