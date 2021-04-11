import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { FindeksService } from 'src/app/services/findeks.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  customerId:number;
  customers:Customer[];
  rentDate:Date;
  returnDate:Date;
  customer:Customer;
  findeksLoad:boolean=true;
  findeksError:boolean=true;
  findeksMsg:string;
  @Input() cars:Car[]
  @Input() car:Car;

  constructor(private customerService:CustomerService,private activatedRoute:ActivatedRoute,private route:Router,private rentalService:RentalService,
    private toastrService:ToastrService,private authService:AuthService,private findeksService:FindeksService) { }

  ngOnInit(): void {
 
        this.getCustomerUserId(this.authService.userId);
       
      }

  getCustomers()
  {
    this.customerService.getCustomers().subscribe(response=>
      {
        this.customers=response.data
      })
  }
  
  getMinDate(){
    var today  = new Date();
    //min="1980-01-01"
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0,10)
  }

  addRental()
  {
    
    let rental:Rental = 
    {
      rentDate :this.rentDate,
      returnDate:this.returnDate,
      carId:this.car.id,
      customerId: this.customerId
    }
   
     this.route.navigate(['/payment/', JSON.stringify(rental)]);
    this.toastrService.info("Ödeme sayfasına yönlendiriliyorsunuz...", "Ödeme İşlemleri");
      }
     
      
    
  customerChange(event:any) {
    this.findeksLoad=false;
    this.findeksService.findeks(this.car.id,this.customerId).subscribe((response) => {
       if (response.success) {
        this.findeksLoad=true;
       }
       else{
         this.findeksMsg=response.message;
         this.findeksLoad=false;
         this.findeksError=false;
         this.toastrService.error(response.message);
       } 
    });
  }

    
  
  getCustomerUserId(userId:number){
    this.customerService.getCustomerUserId(userId).subscribe(response=>{
      this.customers=response.data
    })
  }

 
}
