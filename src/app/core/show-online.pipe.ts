import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showOnline'
})
export class ShowOnlinePipe implements PipeTransform {
  transform(value: any): string {
    let result = value;
    if (result === 1) {
      result = 'onLine';
    } else {
    result = 'offLine';
    }
    return result;
  }
}
