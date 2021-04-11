import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl="https://localhost:44367/api";
  constructor(private httpClient:HttpClient) { }

  creditPayment(rental:Rental,amount:number):Observable<ResponseModel>
  {
    let newPath=this.apiUrl+"/rentals/paymentadd";
    rental.returnDate=undefined;
    return this.httpClient.post<ResponseModel>(newPath,{payment:{amount:amount},rental:rental})
  }

  add(card: CreditCard): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + '/creditcards/add', card);
  }

  getCardByUserId(userId:number): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl + '/creditcards/getbyid?userId='+userId);
  }  

  getAllCustomerId(customerId:number): Observable<ListResponseModel<CreditCard>> {
    return this.httpClient.get<ListResponseModel<CreditCard>>(this.apiUrl + '/creditcards/getallbyid?customerId='+customerId);
  }
}
