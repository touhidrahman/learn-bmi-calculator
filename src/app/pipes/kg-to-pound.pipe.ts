import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kgToPound'
})
export class KgToPoundPipe implements PipeTransform {

  transform(value: number): number {
    return value * 2.204623;
  }

}
