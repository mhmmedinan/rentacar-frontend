import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalDtoComponent } from './components/rental-dto/rental-dto.component';
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



const routes: Routes = [

  {path:"payment/:rental",component:PaymentComponent},
  {path:"admin",component:DashboardComponent,children:[
    {path:"car-add",pathMatch:"full",component:CarAddComponent},
    {path:"car-details",pathMatch:"full",component:CarDetailsComponent},
    {path:"car-details/car-update-delete/:carId",component:CarUpdateDeleteComponent},
    {path:"brand-add",pathMatch:"full",component:BrandAddComponent},
    {path:"brand-details",pathMatch:"full",component:BrandDetailsComponent},
    {path:"brand-details/brand-update/:brandId",component:BrandUpdateComponent},
    {path:"color-add",pathMatch:"full",component:ColorAddComponent},
    {path:"color-details",pathMatch:"full",component:ColorDetailsComponent},
    {path:"color-details/color-update/:colorId",component:ColorUpdateComponent},

  ]}, 
  {path:"home",component:HomeComponent,children:[
    {path:"",pathMatch:"full",component:CarComponent},
    {path:"cars/color",pathMatch:"full",component:CarComponent},
    {path:"cars/brand",component:CarComponent},
    {path:"cars/brand/:brandId",component:CarComponent},
    {path:"cars/brand/:brandId/cardetail/:carId",component:CarDetailComponent},
    {path:"cardetail/:carId", component:CarDetailComponent},
    {path:"cars/cardetail/carId", component:CarDetailComponent },
    {path:"cars/color/:colorId",component:CarComponent},
    {path:"cars/color/:colorId/cardetail/:carId",component:CarDetailComponent},
    {path:"customers",component:CustomerComponent},
    {path:"cars/filter/:brandId/:colorId",component:CarComponent},
    {path:"rental/:carId",component:RentalComponent},
    {path:"rentalDtos",component:RentalDtoComponent},
     
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
