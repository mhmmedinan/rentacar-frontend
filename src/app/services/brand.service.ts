import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44367/api";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>
  {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl+"/brands/getall")
  }

  add(brand:Brand):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/brands/add",brand)
  }

  update(brand:Brand):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/brands/update",brand)
  }
  delete(brand:Brand):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/brands/delete",brand)
  }
  getById(brandId:number):Observable<SingleResponseModel<Brand>>
  {
    return this.httpClient.get<SingleResponseModel<Brand>>(this.apiUrl+"/brands/getbyid?brandId="+brandId)
  }
}
