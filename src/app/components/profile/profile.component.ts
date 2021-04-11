import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, FormBuilder, Validators,} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userUpdateForm:FormGroup;
  customerUpdateForm:FormGroup;
  user:User;
  
  constructor(private formBuilder:FormBuilder,  private userService:UserService,
    private toastrService:ToastrService,private localStorage:LocalStorageService,private activatedRoute:ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {
  
    this.createUserUpdateForm()
    this.getUser()
  }
  
 

  createUserUpdateForm(){
    this.userUpdateForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required]
    })
  }

  userUpdate(){
    if (this.userUpdateForm.valid) {
      let user = Object.assign({id:this.user.id}, this.userUpdateForm.value)
      
      this.userService.update(user).subscribe(response => {
        this.toastrService.success(response.message,"Successfully");
      },responseError => {
        this.toastrService.error(responseError.error,"Error")
      })
    }else{
      this.toastrService.error("Please fill the form completely","Error")
    }
  }

  
  getUser(){
    this.userService.getbyid(this.authService.getCurrentUserId()).subscribe(response => {
      this.user = response.data;
      this.userUpdateForm.patchValue(response.data)
    })
  }
}
