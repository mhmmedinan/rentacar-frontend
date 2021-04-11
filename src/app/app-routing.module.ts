import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { CustomerComponent } from './components/admin/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalDtoComponent } from './components/admin/rental-dto/rental-dto.component';
import { RentalComponent } from './components/rental/rental.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CarAddComponent } from './components/admin/car-add/car-add.component';
import { CarDetailsComponent } from './components/admin/car-details/car-details.component';
import { CarUpdateDeleteComponent } from './components/admin/car-update-delete/car-update-delete.component';
import { BrandAddComponent } from './components/admin/brand-add/brand-add.component';
import { BrandDetailsComponent } from './components/admin/brand-details/brand-details.component';
import { BrandUpdateComponent } from './components/admin/brand-update/brand-update.component';
import { ColorAddComponent } from './components/admin/color-add/color-add.component';
import { ColorDetailsComponent } from './components/admin/color-details/color-details.component';
import { ColorUpdateComponent } from './components/admin/color-update/color-update.component';
import { LoginComponent } from './components/login-register/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { HomeRentComponent } from './components/home-rent/home-rent.component';
import { UserRentalComponent } from './components/user-rental/user-rental.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';



const routes: Routes = [

  {path:"payment/:rental",component:PaymentComponent,canActivate:[LoginGuard]},
  {path:"home-rent",component:HomeRentComponent},

  
  {path:"admin",component:DashboardComponent,canActivate:[AdminGuard,LoginGuard], children:[
    {path:"car-add",pathMatch:"full",component:CarAddComponent},
    {path:"car-details",pathMatch:"full",component:CarDetailsComponent},
    {path:"car-details/car-update-delete/:carId",component:CarUpdateDeleteComponent},
    {path:"brand-add",pathMatch:"full",component:BrandAddComponent},
    {path:"brand-details",pathMatch:"full",component:BrandDetailsComponent},
    {path:"brand-details/brand-update/:brandId",component:BrandUpdateComponent},
    {path:"color-add",pathMatch:"full",component:ColorAddComponent},
    {path:"color-details",pathMatch:"full",component:ColorDetailsComponent},
    {path:"color-details/color-update/:colorId",component:ColorUpdateComponent},
    {path:"rentalDto",component:RentalDtoComponent},
    {path:"customer",component:CustomerComponent},

  ]}, 
  {path:"home",component:HomeComponent,children:[
    {path:"",pathMatch:"full",component:CarComponent},
    {path:"cars/color",pathMatch:"full",component:CarComponent},
    {path:"cars/brand",component:CarComponent},
    {path:"cars/brand/:brandId",component:CarComponent},
    {path:"cars/brand/:brandId/cardetail/:carId",component:CarDetailComponent},
    {path:"cardetail/:carId", component:CarDetailComponent,canActivate:[LoginGuard]},
    {path:"cars/cardetail/carId", component:CarDetailComponent,canActivate:[LoginGuard] },
    {path:"cars/color/:colorId",component:CarComponent},
    {path:"cars/color/:colorId/cardetail/:carId",component:CarDetailComponent},
    {path:"cars/filter/:brandId/:colorId",component:CarComponent},
    {path:"rental/:carId",component:RentalComponent},
    {path:"userRentals",component:UserRentalComponent,canActivate:[LoginGuard]},
    {path:"profile",component:ProfileComponent,canActivate:[LoginGuard]},
    {path:"customer",component:CustomerAddComponent,canActivate:[LoginGuard]},
    {path:"customer-list",component:CustomerListComponent,canActivate:[LoginGuard]},
    {path:"customer-list/customer-update/:customerId",component:CustomerUpdateComponent,canActivate:[LoginGuard]},
     
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
