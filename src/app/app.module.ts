import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
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
import { RentalDtoComponent } from './components/rental-dto/rental-dto.component'


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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
