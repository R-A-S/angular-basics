import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mult',
})
export class MultByPipe implements PipeTransform {
  transform(num: number, mul = 2): number {
    return num * mul
  }
}


