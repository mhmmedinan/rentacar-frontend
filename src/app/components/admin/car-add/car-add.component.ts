import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImagesByIdService } from 'src/app/services/car-images-by-id.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carImageAddForm:FormGroup;
  selectedFile: File;
  cars:Car[]
  carAddForm:FormGroup;
  imageAddForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private carService:CarService,private carImageService:CarImagesByIdService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.createAddCarForm();
    this.getCars();
    this.createCarImageAddForm();


  }

  
  createAddCarForm()
  {
    this.carAddForm=this.formBuilder.group(
      {
        brandId:["",Validators.required],
        colorId:["",Validators.required],
        modelYear:["",Validators.required],
        dailyPrice:["",Validators.required],
        description:["",Validators.required]
      })
  }

  

  add()
  {
    if(this.carAddForm.valid)
    {
      let carModel = Object.assign({},this.carAddForm.value) 
      this.carService.add(carModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
      },(dataError)=>
      {
        if(dataError.error.Errors.length>0)
        {
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            
            this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
          
        }
      })
      
    }
    else{this.toastrService.error("Formunuz eksik","Dikkat")}

  }

  getCars()
  {
    this.carService.getCars().subscribe(response=>
      {
        this.cars=response.data
      })
  }

  createCarImageAddForm(){
    this.carImageAddForm = this.formBuilder.group({
        carId:["",Validators.required],
    });
  }

  addImage(){
    if(this.carImageAddForm.valid){
      let carImageModel = Object.assign({},this.carImageAddForm.value);
      this.carImageService.carImageAdd(carImageModel,this.selectedFile).subscribe(data=>{
        this.toastrService.success("Ekleme Başarılı",data.message);
      },dataError=>{
        if (dataError.error.ValidationErrors.length > 0) {
          for (
            let i = 0;
            i < dataError.error.ValidationErrors.length;
            i++
          ) {
            this.toastrService.error(
              dataError.error.ValidationErrors[i].ErrorMessage,
              'İşlem Başarısız..!!'
            );
          }
        }
      })
        
    }
    else{
      this.toastrService.warning("Formu doldurnuz");
    }  

    function refreshx() {
      window .location.reload();
  }   
  window.setInterval(refreshx, 1000); 
}  
    onFileChanged(event:any) {
      this.selectedFile = event.target.files[0]
    }

  



  
  

  
  
  
}
