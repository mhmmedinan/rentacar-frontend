import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/creditCard';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { PaymentService } from 'src/app/services/payment.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentAddForm: FormGroup;
 rental:Rental;
 carDetails:Car[];
 car:Car;
 creditCards: CreditCard[] = [];
 creditCardId: number;
 amountPayment:number=0;
 user:User
 customerId:number
  constructor(private activatedRoute:ActivatedRoute,private cardetailService:CarDetailService,
    private router:Router,private toastrService:ToastrService,private paymentService:PaymentService,private formBuilder:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>
      {
        
        if(params["rental"])
        {
          this.rental = JSON.parse(params['rental']);
        this.getRental();
        this.getCarDetail();
        this.createCreditCard()
        this.getCards(this.authService.getCurrentUserId())
        }
      })
  }
  getRental(){
    console.log(this.rental);
  }
  createCreditCard() {
    this.paymentAddForm = this.formBuilder.group({
      userId: [this.authService.getCurrentUserId(), Validators.required],
      number: ['', Validators.required],
      fullName: ['', Validators.required],
      ccv: ['', Validators.required],
      expirationMonth: ['', Validators.required],
      expirationYear: ['', Validators.required],
    });
  }

  getCards(customerId: number) {
    this.paymentService.getAllCustomerId(customerId).subscribe((response) => {
      if (response.success) {
        this.creditCards = response.data;
      }
    });
  }
  cardChange(event: any) {
    let selectedCard = this.creditCards.find((c) => c.id == this.creditCardId);
    this.paymentAddForm.get('fullName')?.setValue(selectedCard?.fullName);
    this.paymentAddForm.get('number')?.setValue(selectedCard?.number);
    this.paymentAddForm
      .get('expirationMonth')
      ?.setValue(selectedCard?.expirationMonth);
    this.paymentAddForm
      .get('expirationYear')
      ?.setValue(selectedCard?.expirationYear);
    this.paymentAddForm.get('ccv')?.setValue(selectedCard?.ccv);
  }

  creditCardAdd() {
    if (this.paymentAddForm.valid) {
      let cardModel = Object.assign({}, this.paymentAddForm.value);
      this.paymentService.add(cardModel).subscribe(
        (response) => {
          if (response.success) {
            this.toastrService.success(response.message);
         
          } else {
            this.toastrService.error(response.message);
          }
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Form Hatalı');
    }
  }

  getCarDetail(){
    this.cardetailService.getCarDetail(this.rental.carId).subscribe(reponse=>
      {
        this.carDetails=reponse.data;
        this.paymentCalculator();
      })
    }

  paymentCalculator()
  {
    
    if(this.rental.returnDate!=null)
    {
      var date1=new Date(this.rental.returnDate.toString());
      var date2=new Date(this.rental.rentDate.toString());
      var difference = date1.getTime() - date2.getTime();

      var numberOfDays = Math.ceil(difference / (1000 * 3600 * 24)); 

      this.amountPayment = numberOfDays;
      if(this.amountPayment <= 0){
        this.router.navigate(['/home']);
        this.toastrService.error("Araç listesine yönlendiriliyorsunuz", "Hatalı işlem");
      }
    }
    
  }

  creditPayment()
  {
    
    this.paymentService.creditPayment(this.rental,this.amountPayment).subscribe(response=>
      {
        this.router.navigate(['/home']);
        this.toastrService.success(response.message.toString(), "İşlem Başarılı");
      })
  }
}
