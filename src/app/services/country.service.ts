import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purpose } from '../models/TravelPurpose';
import { VehicleClass } from '../models/Vehicle';
import { DriverTypes } from '../models/Driver';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }
  public getCountries(): Observable<any> {
    return this.httpClient.get('https://restcountries.eu/rest/v2/all');
  }
  public getPurpose() {
    return Purpose;
  }
  public getVehicle(){
    return VehicleClass;
  }
  public getDriverTypes() {
    return DriverTypes;
  }
}
