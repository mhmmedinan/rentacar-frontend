import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { ListResponseModel } from '../models/listResponseModel';
import { RegisterModel } from '../models/registerModel';
import { Observable } from 'rxjs';
import { PasswordChangeModel } from '../models/passwordChangeModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  name:string
  userId:number;
  roles:string[] = []
  token:any
  tokenKey="token"
  jwtHelper:JwtHelperService = new JwtHelperService();
  apiUrl = "https://localhost:44367/api/auth/"
  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService,private toastrService:ToastrService) {  this.setUserStats()}

  login(user:LoginModel)
  {
    let newPath = this.apiUrl+"login"
    this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,user).subscribe(response=>{
      if(response.success){
        this.localStorageService.setToken(response.data.token)
        this.toastrService.success("Giriş Yapıldı")
        this.setUserName()
       this.setUserStats()
        
        setTimeout(function(){
          location.reload()
        },400)
       }
    },responseError => {
      this.toastrService.error(responseError.error,"Hata")
    })
  }

  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>
  {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  }
 

  async setUserStats(){
    if(this.loggedIn()){
      this.setCurrentUserId()
      this.setUserName()
      this.setRoles()
    }
  }

  changePassword(passwordChangeModel:PasswordChangeModel):Observable<ResponseModel>{
    //let newPath = environment.apiUrl + "auth/changepassword";
    return this.httpClient.post<ResponseModel>(this.apiUrl + "changepassword",passwordChangeModel);
  }
 
  getDecodedToken(){
    try{
      this.token = this.localStorageService.getToken()
      return this.jwtHelper.decodeToken(this.token);
    }
    catch(Error){
        return null;
    }
  }
  
  loggedIn(): boolean {
    this.token = this.localStorageService.getToken()
    let isExpired = this.jwtHelper.isTokenExpired(this.token);
    return !isExpired;
  }
  
  setUserName(){
    var decoded = this.getDecodedToken()
    var propUserName = Object.keys(decoded).filter(x => x.endsWith("/name"))[0];
    this.name = decoded[propUserName];
  }
  
  getUserName(): string {
    return this.name;
  }
  setCurrentUserId(){
    var decoded = this.getDecodedToken()
    var propUserId = Object.keys(decoded).filter(x => x.endsWith("/nameidentifier"))[0];
    this.userId = Number(decoded[propUserId]);
  }
  
  getCurrentUserId():number {
    return this.userId
  }

  logOut() {
    this.localStorageService.removeToken();
    this.roles = [];
    this.toastrService.success("Çıkış yapıldı","Başarılı")
    setTimeout(function(){
      location.reload()
    },400)
  }

  

  setRoles(){
    if (this.localStorageService.getToken()) {
      this.token = this.localStorageService.getToken()
      var decoded = this.jwtHelper.decodeToken(this.token);
      var role = Object.keys(decoded).filter(x => x.endsWith("/role"))[0];
      this.roles = (decoded[role])
    }
  }
  isAdmin(){
    if (this.roles.includes("admin")) {
      return true
    }
    return false;
  }
}
