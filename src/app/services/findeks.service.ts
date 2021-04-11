import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class FindeksService {

  apiUrl="https://localhost:44367/api/findeks/";
  constructor(private httpClient:HttpClient) { }

  findeks(carId:number,customerId:number):Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(this.apiUrl  + 'findeks?carId=' + carId + '&customerId=' + customerId)
  }
}
