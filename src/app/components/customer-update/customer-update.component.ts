import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  updateCustomerForm:FormGroup
  id:number;
  updateCustomer:Customer
  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,private customerService:CustomerService,private authService:AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      if(param["customerId"]){
        this.id=param["customerId"];
        this.getCustomerId(param["customerId"]);
        this.createForm()
        
      }
    })
  }

  createForm()
  {
    this.updateCustomerForm=this.formBuilder.group({
      userId:[this.authService.getCurrentUserId(),Validators.required],
      companyName:["",Validators.required],
      findeks:["",Validators.required]
    })
  }

  getCustomerId(id:number)
  {
  this.customerService.getById(id).subscribe(response=>
    {
      this.updateCustomer=response.data
    })
  }

  update(){
    if(this.updateCustomerForm.valid){
      let customerModel = Object.assign({}, this.updateCustomerForm.value);
      
      customerModel.id=parseInt(this.id+"")
  
      this.customerService.update(customerModel).subscribe(response=>{
        this.toastrService.success("Müşteri Güncellendi","Başarılı"),
        this.router.navigate(['home/customer-list']);
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
