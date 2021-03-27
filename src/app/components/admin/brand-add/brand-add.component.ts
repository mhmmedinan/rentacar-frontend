import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm:FormGroup
  constructor(private brandService:BrandService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm()
  }

  createBrandAddForm()
  {
    this.brandAddForm=this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  add()
  {
    if(this.brandAddForm.valid)
    {
      let brandModel = Object.assign({},this.brandAddForm.value) 
      this.brandService.add(brandModel).subscribe(data=>{
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
}
