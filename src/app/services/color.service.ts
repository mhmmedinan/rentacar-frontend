import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44367/api/";

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>
  {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl+"colors/getall")
  }

  add(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color)
  }

  delete(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/delete",color)
  }
  update(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/update",color)
  }
  getById(colorId:number):Observable<SingleResponseModel<Color>>
  {
    return this.httpClient.get<SingleResponseModel<Color>>(this.apiUrl+"colors/getbyid?colorId="+colorId)
  }
}
