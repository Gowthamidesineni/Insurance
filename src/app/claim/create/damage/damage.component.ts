import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.css']
})
export class DamageComponent implements OnInit {
  damagedDate:FormControl;
  damageForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.damagedDate=new FormControl('',
     [Validators.required]);
   this.damageForm=formBuilder.group({
     lostDate:this.damagedDate
   })
   }

  ngOnInit() {
  }

}
