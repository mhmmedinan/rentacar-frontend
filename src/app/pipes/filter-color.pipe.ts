import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: Color[], filterTextColor: string): Color[] {
    filterTextColor= filterTextColor? filterTextColor.toLocaleLowerCase():""
    return filterTextColor?value.filter((c:Color)=>c.colorName.toLocaleLowerCase().indexOf(filterTextColor)!==-1):value;
  }

}
