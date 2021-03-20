import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44367/api";
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<RentalDto>>
  {
    let newPath= this.apiUrl+"/rentals/getdetail";
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath)
  }

  addRentals(rental:Rental):Observable<ResponseModel>
  {
    let newPath= this.apiUrl+"/rentals/add";
    return this.httpClient.post<ResponseModel>(newPath,{rental:rental})
  }
}
