import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { User } from 'src/app/models/user';
import { UserRental } from 'src/app/models/userRental';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import {LoginComponent} from '../login-register/login/login.component'
import { RegisterComponent } from '../login-register/register/register.component';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  users:User[]=[]
  user:User
  userRentals:UserRental
  userLogged:boolean;
  userName:string;
  isAdminPage:boolean;
  adminPageRole: "admin";
  userItems: MenuItem[];
  constructor( private dialogService:DialogService,
    private authService:AuthService,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.getUserName()
    this.setUserLogged()
    this.createUserItems()
   
  }

  async createUserItems(){
    if(this.userLogged){
      this.userItems = [{ label: 'Profil', icon: 'pi pi-users', routerLink:'profile' },
    { label: 'Müşteri Ekle', icon: 'pi pi-plus-circle', routerLink:'customer' },
    { label: 'Müşteri Listesi', icon: 'pi pi-list', routerLink:'customer-list' },{ label: 'Çıkış Yap', icon: 'pi pi-sign-out', command: () => {
      this.logOut();
  } }]
      await this.setIsAdminPage()
      
      if(this.isAdminPage){
        this.userItems.push(
          { label: 'Admin', icon: 'pi pi-briefcase', routerLink: '/admin'},
          { separator: true },
        )
      }
    
     
    }else{
      this.userItems = [
        { label: 'Kayıt ol', icon: 'pi pi-user-edit', command: () => {
          this.register()
          
        } },
        { label: 'Giriş yap', icon: 'pi pi-sign-in', command: () => {
          this.login()
        } }
      ];
    }
  }


  login(){
    const ref = this.dialogService.open(LoginComponent, {
        header: 'Giriş yap',
        width: '30%'
    });
  }

  register()
  {
    const ref = this.dialogService.open(RegisterComponent, {
      header: 'Kayıt Ol',
      width: '30%'
  });
  }
  logOut()
  {
    this.authService.logOut()
    this.router.navigate(['/home'])
    
  }
  setUserLogged(){
  this.userLogged = this.authService.loggedIn()
  }
  getUserName(){
  this.userName = this.authService.getUserName()
  }

  setIsAdminPage(){
  this.isAdminPage =  this.authService.isAdmin()
  }

  

}
