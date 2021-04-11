import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserOperationClaim } from '../models/userOperationClaim';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {
  apiUrl="https://localhost:44367/api/";
  constructor(private httpClient:HttpClient) { }

  getbyid(id:number):Observable<SingleResponseModel<UserOperationClaim>>
  {
    return this.httpClient.get<SingleResponseModel<UserOperationClaim>>(this.apiUrl+"useroperationclaims/getbyid?id="+id)
  }
}
