import { Pipe, PipeTransform } from '@angular/core';
import { PhoneKontact } from './lesson04.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: PhoneKontact[], sort: string): PhoneKontact[] {
    if (!arr) return [];
    if (!sort) return arr;
    if (sort === 'asc') {
      return arr.sort((a, b) => {
        if (a.firstName < b.firstName) {
          return -1
        }
        if (a.firstName > b.firstName) {
          return 1
        }
        return 0
      });

    }
    return arr.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return -1
      }
      if (a.firstName > b.firstName) {
        return 1
      }
      return 0
    });
  }

}
