import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[]=[]
  constructor(private toastrService:ToastrService,private customerService:CustomerService,private authService:AuthService) { }

  ngOnInit(): void {
    this.getCustomersUserId(this.authService.getCurrentUserId())
  }

  getCustomersUserId(userId:number){
    this.customerService.getCustomerUserId(userId).subscribe(response=>{
      this.customers=response.data
    })
  }


  delete(customer:Customer){
    this.customerService.delete(customer).subscribe(response=>{
      this.toastrService.success("Müşteri silindi","Başarılı");
    })
  }
}
