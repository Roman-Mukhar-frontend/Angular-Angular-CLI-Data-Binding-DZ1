import { Pipe, PipeTransform } from '@angular/core';
import { PhoneKontact } from './lesson04.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: PhoneKontact[], searchText: string): PhoneKontact[] {
    if (!arr) return [];
    if (!searchText) return arr;

    return arr.filter(phoneKontact => phoneKontact.firstName.toLowerCase().includes(searchText.toLowerCase()) || phoneKontact.lastName.toLowerCase().includes(searchText.toLowerCase()) || phoneKontact.number.includes(searchText));
  }

}
