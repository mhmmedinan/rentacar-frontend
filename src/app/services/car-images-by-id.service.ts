import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImagesByIdService {
  apiUrl="https://localhost:44367/api/"
  constructor(private httpClient:HttpClient) { }

  
  getCarImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carImages/getimagesbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  

  
  carImageAdd(carImage:CarImage,file:any):Observable<ResponseModel>{
    const uploadData = new FormData();
    uploadData.append('Image',file,file.name)
    uploadData.append('CarId',JSON.stringify(carImage.carId))
    let newPath =  this.apiUrl+"carImages/add"; 
    return this.httpClient.post<ResponseModel>(newPath,uploadData)
  }
}
