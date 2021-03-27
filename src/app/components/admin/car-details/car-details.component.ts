import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  cars:Car[]=[];
  car:Car;
  carDelete:FormGroup
  dataLoaded=false;
  constructor(private carService:CarService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCars()
  }
  getCars()
  {
    this.carService.getCars().subscribe(response=>
      {
        this.cars=response.data
        this.dataLoaded=true
      })
  }

  delete(car:Car){
    this.carService.delete(car).subscribe(response=>{
      this.toastrService.success("Araç silindi","Başarılı");
      this.getCars()
    })
  }
}
