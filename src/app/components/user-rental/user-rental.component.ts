import { Component, OnInit } from '@angular/core';
import { UserRental } from 'src/app/models/userRental';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-rental',
  templateUrl: './user-rental.component.html',
  styleUrls: ['./user-rental.component.css']
})
export class UserRentalComponent implements OnInit {

  userRentals:UserRental[]=[]
  constructor(private authService:AuthService,private userService:UserService) { }

  ngOnInit(): void {
    this.getUserRentalId(this.authService.userId)
  }


  getUserRentalId(userId:number){
    this.userService.getUserRentalId(userId).subscribe(response=>{
      this.userRentals=response.data;
    })
  }
}
