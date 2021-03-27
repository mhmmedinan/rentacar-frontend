import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update-delete',
  templateUrl: './car-update-delete.component.html',
  styleUrls: ['./car-update-delete.component.css']
})
export class CarUpdateDeleteComponent implements OnInit {

  updateCarForm :FormGroup;
  updateCar:Car;
  cars:Car[]
  id:number;
  colors:Color[]=[];
  brands:Brand[]=[]
 
  constructor( private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private carService:CarService, private brandService: BrandService,
    private colorService: ColorService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      if(param["carId"]){
        this.id=param["carId"];
        this.getCarById(param["carId"]);
        this.getColors();
        this.getBrands();
        this.createForm();
      }
    })
  }

 


 createForm()
 {
   this.updateCarForm=this.formBuilder.group({
     brandId:["",Validators.required],
     colorId:["",Validators.required],
     modelYear:["",Validators.required],
     dailyPrice:["",Validators.required],
     description:["",Validators.required]
   })

 }


  getBrands() {
    this.brandService.getBrands().subscribe(response => {
       this.brands = response.data;
    });
 }

 
 getColors() {
  this.colorService.getColors().subscribe(response => {
     this.colors = response.data;
  });
}

getCarById(id:number)
{
  this.carService.getById(id).subscribe(response=>
    {
      this.updateCar=response.data
    })
}

update(){
  if(this.updateCarForm.valid){
    let carModel = Object.assign({}, this.updateCarForm.value);
    carModel.brandId = parseInt(carModel.brandId);
    carModel.colorId = parseInt(carModel.colorId);
    carModel.id=parseInt(this.id+"")

    this.carService.update(carModel).subscribe(response=>{
      this.toastrService.success("Araç Güncellendi","Başarılı"),
      this.router.navigate(['admin/car-details']);
    },responseError=>{
      if (responseError.error.ValidationErrors.length > 0) {
        for (
          let i = 0;
          i < responseError.error.ValidationErrors.length;
          i++
        ) {
          this.toastrService.error(
            responseError.error.ValidationErrors[i].ErrorMessage,
            'Hata'
          );
        }
      }
    })
    
  }
  

}
}
