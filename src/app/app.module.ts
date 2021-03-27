import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
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
import { RentalDtoComponent } from './components/rental-dto/rental-dto.component';
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
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot(
      {
        positionClass:"toast-bottom-right"
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
