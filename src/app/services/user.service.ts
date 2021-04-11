import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';
import { UserRental } from '../models/userRental';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:44367/api/";
  constructor(private httpClient:HttpClient) { }

  getbyid(id:number):Observable<SingleResponseModel<User>>
  {
    return this.httpClient.get<SingleResponseModel<User>>(this.apiUrl+"user/getbyid?id="+id)
  }

  getByEmail(email:string):Observable<ListResponseModel<User>>
  {
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl+"user/getbyemail?email="+email)
  }
  getUserRentalId(userId:number):Observable<ListResponseModel<UserRental>>
  {
    let newPath=this.apiUrl+"user/getrentalbyuserid?userId="+userId;
    return this.httpClient.get<ListResponseModel<UserRental>>(newPath);
  }

  update(user:User):Observable<ResponseModel>{
    let newPath=this.apiUrl+"user/update";
    return this.httpClient.post<ResponseModel>(newPath,user)
  }

  getUser():Observable<ListResponseModel<User>>
  {
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl+"user/getall")
  }

  
}
