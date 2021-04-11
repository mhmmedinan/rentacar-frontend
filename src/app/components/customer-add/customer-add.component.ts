import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private customerService:CustomerService,private authService:AuthService) { }

  ngOnInit(): void {
    this.createAddCarForm()
  }


  createAddCarForm()
  {
    this.customerAddForm=this.formBuilder.group(
      {
        userId:[this.authService.getCurrentUserId(),Validators.required],
        companyName:["",Validators.required],
        findeks:["",Validators.required]
      })
  }


  add()
  {
    if(this.customerAddForm.valid)
    {
      let customerModel = Object.assign({},this.customerAddForm.value) 
      this.customerService.add(customerModel).subscribe(data=>{
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
