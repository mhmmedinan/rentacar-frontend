import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/admin/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipePipe } from './pipes/filterBrand-pipe.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';

import{ToastrModule} from "ngx-toastr";
import { RentalDtoComponent } from './components/admin/rental-dto/rental-dto.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CarAddComponent } from './components/admin/car-add/car-add.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { DashnaviComponent } from './components/admin/dashnavi/dashnavi.component';
import { CarDetailsComponent } from './components/admin/car-details/car-details.component';
import { CarUpdateDeleteComponent } from './components/admin/car-update-delete/car-update-delete.component';
import { BrandAddComponent } from './components/admin/brand-add/brand-add.component';
import { BrandDetailsComponent } from './components/admin/brand-details/brand-details.component';
import { BrandUpdateComponent } from './components/admin/brand-update/brand-update.component';
import { ColorAddComponent } from './components/admin/color-add/color-add.component';
import { ColorDetailsComponent } from './components/admin/color-details/color-details.component';
import { ColorUpdateComponent } from './components/admin/color-update/color-update.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import {LoginComponent} from './components/login-register/login/login.component'
import { RegisterComponent } from './components/login-register/register/register.component';
import { HomeRentComponent } from './components/home-rent/home-rent.component';
import { UserRentalComponent } from './components/user-rental/user-rental.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';





@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    NaviComponent,
    CarDetailComponent,
    FilterPipePipe,
    FilterColorPipe,
    CarFilterComponent,
    RentalComponent,
    PaymentComponent,
    RentalDtoComponent,
    HomeComponent,
    DashboardComponent,
    CarAddComponent,
    SidebarComponent,
    DashnaviComponent,
    CarDetailsComponent,
    CarUpdateDeleteComponent,
    BrandAddComponent,
    BrandDetailsComponent,
    BrandUpdateComponent,
    ColorAddComponent,
    ColorDetailsComponent,
    ColorUpdateComponent,
    RegisterComponent,
    LoginComponent,
    HomeRentComponent,
    UserRentalComponent,
    ProfileComponent,
    ChangePasswordComponent,
    CustomerAddComponent,
    CustomerListComponent,
    CustomerUpdateComponent,
  
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    DropdownModule,
    SplitButtonModule,
    CarouselModule,
    NgbModule,
    ToastrModule.forRoot(
      {
        positionClass:"toast-bottom-right"
      })
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
    
  },DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
