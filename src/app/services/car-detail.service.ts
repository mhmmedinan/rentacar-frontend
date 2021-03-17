import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44367/api/";
  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<ListResponseModel<Car>>
  {
    let newPath = this.apiUrl+"cars/getalldetail?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
