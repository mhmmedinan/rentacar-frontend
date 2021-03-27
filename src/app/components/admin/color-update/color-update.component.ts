import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  updateColorForm:FormGroup;
  updateColor:Color;
  id:number;
  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,private colorService: ColorService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      if(param["colorId"]){
        this.id=param["colorId"];
        this.getColorById(param["colorId"]);
        this.createForm()
        
      }
    })
  }

  createForm()
  {
    this.updateColorForm=this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }

  getColorById(id:number)
  {
  this.colorService.getById(id).subscribe(response=>
    {
      this.updateColor=response.data
    })
  }
  update(){
    if(this.updateColorForm.valid){
      let colorModel = Object.assign({}, this.updateColorForm.value);
      
      colorModel.id=parseInt(this.id+"")
  
      this.colorService.update(colorModel).subscribe(response=>{
        this.toastrService.success("Renk Güncellendi","Başarılı"),
        this.router.navigate(['admin/color-details']);
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
