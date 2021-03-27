import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  updateBrandForm:FormGroup;
  updateBrand:Brand;
  id:number;
  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,private brandService: BrandService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      if(param["brandId"]){
        this.id=param["brandId"];
        this.getBrandById(param["brandId"]);
        this.createForm()
        
      }
    })
  }

  createForm()
  {
    this.updateBrandForm=this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  getBrandById(id:number)
  {
  this.brandService.getById(id).subscribe(response=>
    {
      this.updateBrand=response.data
    })
  }

  update(){
    if(this.updateBrandForm.valid){
      let brandModel = Object.assign({}, this.updateBrandForm.value);
      
      brandModel.id=parseInt(this.id+"")
  
      this.brandService.update(brandModel).subscribe(response=>{
        this.toastrService.success("Marka Güncellendi","Başarılı"),
        this.router.navigate(['admin/brand-details']);
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
