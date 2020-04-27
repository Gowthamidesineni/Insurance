import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})
export class LossComponent implements OnInit {
  lostDate: FormControl;
  countries: any;
  selectedCountry: string;
  lossTime: FormControl;
  speed: FormControl;
  lossForm: FormGroup;
  place: FormControl;
  to: FormControl;
  purposes: any;
  purposeOftheVehicle: FormControl;
  vehicleClass: FormControl;
  vehicles: any;
  drivers: any;
  travelCount: FormControl;
  // stationName: FormControl;
  // firNumber: FormControl;
  driverName: FormControl;
  dateOfBirth: FormControl;
  relationInsured: FormControl;
  mobileNumber: FormControl;
  licenceNumber: FormControl;
  licenseEffectiveDate: FormControl;
  issueRTO: FormControl;
  licenseExpiryDate: FormControl;
  constructor(private formBuilder: FormBuilder, private countryService: CountryService) {
   this.lostDate = new FormControl('',
     [Validators.required]);
   this.lossTime = new FormControl('',
     [Validators.required]);
   this.speed = new FormControl('',
     [Validators.required]);
   this.place = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z{5,50}]')]);
   this.to = new FormControl('', [Validators.required]);
   this.purposeOftheVehicle = new FormControl('', [Validators.required]);
   this.vehicleClass = new FormControl('', [Validators.required]);
   this.travelCount = new FormControl('', [Validators.required]);
  //  this.stationName = new  FormControl('', [Validators.required]);
  //  this.firNumber = new  FormControl('', [Validators.required]);
   this.driverName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{3,20}')]);
   this.relationInsured = new FormControl('', [Validators.required]);
   this.dateOfBirth = new FormControl('', [Validators.required]);
   this.mobileNumber = new FormControl('', [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]);
   this.licenceNumber = new FormControl('', [Validators.required]);
   this.licenseEffectiveDate = new FormControl('', [Validators.required]);
   this.issueRTO = new FormControl('', [Validators.required]);
   this.licenseExpiryDate = new FormControl('', [Validators.required]);
   this.lossForm = formBuilder.group({
     lostDate: this.lostDate
   });
   }

  ngOnInit() {
    this.countryService.getCountries().subscribe(response => {
      this.countries = response;
      console.log(this.countries);
    });
    this.purposes = this.countryService.getPurpose();
    this.vehicles = this.countryService.getVehicle();
    this.drivers = this.countryService.getDriverTypes();
  }
  getCountry(obj) {
    console.log(obj.value);
  }
  getTo(obj) {
    console.log(obj.value);
  }
  getPurpose(obj) {
    console.log(obj.value);
  }
}
