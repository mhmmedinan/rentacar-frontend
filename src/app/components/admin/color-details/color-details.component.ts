import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-details',
  templateUrl: './color-details.component.html',
  styleUrls: ['./color-details.component.css']
})
export class ColorDetailsComponent implements OnInit {

  colors:Color[]=[]
  color:Color
  constructor(private colorService:ColorService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getColors()
  }

  getColors()
  {
    this.colorService.getColors().subscribe(response=>
      {
        this.colors=response.data
      })
  }

  delete(color:Color){
    this.colorService.delete(color).subscribe(response=>{
      this.toastrService.success("Renk silindi","Başarılı");
      this.getColors()
    })
  }

}
