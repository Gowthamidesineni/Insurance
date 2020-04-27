import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'aspire-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
data:any;
  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.data=this.menuService.getMenuData();
  }

}
