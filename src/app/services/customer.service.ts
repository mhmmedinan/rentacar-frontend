import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44367/api/customers/";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>
  {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl+"getdetail")
  }

  getCustomerUserId(userId:number):Observable<ListResponseModel<Customer>>{
    let newPath=this.apiUrl+"getcustomeruserid?userid="+userId;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getById(customerId:number):Observable<SingleResponseModel<Customer>>{
    let newPath=this.apiUrl+"getbyid?customerId="+customerId;
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }

  add(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",customer)
  }

  update(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",customer)
  }

  delete(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",customer)
  }

}
