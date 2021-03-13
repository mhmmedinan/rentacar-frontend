import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RentalResponseModel} from "../models/rentalResponseModel";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44367/api/rentals/getdetail";
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<RentalResponseModel>
  {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl)
  }
}
