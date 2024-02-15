import { Pipe, PipeTransform } from '@angular/core';
import { PhoneKontact } from './lesson04.component';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(arr: PhoneKontact[], sort: string): PhoneKontact[] {
    if (!arr) return [];
    if (!sort) return arr;
    if (sort === 'asc') {
      return arr.sort((a, b) => {
        if (a.number) {
          return -1
        }
        if (a.number > b.number) {
          return 1
        }
        return 0
      });

    }
    return arr.sort((a, b) => {
      if (a.number > b.number) {
        return -1
      }
      if (a.number > b.number) {
        return 1
      }
      return 0
    });
  }

}
