import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImagesByIdService } from 'src/app/services/car-images-by-id.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CarDetailComponent implements OnInit {
  
  carDetails:Car[];
  car:Car;
  carImages:CarImage[]=[];
  constructor(private cardetailService:CarDetailService,private carImagesById:CarImagesByIdService, private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
        this.getCarImagesById(params["carId"])
        
        
      }
      
    }
    
    );
  }
getCarDetail(carId:number)
{
  this.cardetailService.getCarDetail(carId).subscribe(response=>
    {
      this.carDetails=response.data
    })
}

getCarImagesById(carId:number)
{
  this.carImagesById.getCarImagesById(carId).subscribe(response=>
    {
      this.carImages=response.data
    })
}




  
  
}

