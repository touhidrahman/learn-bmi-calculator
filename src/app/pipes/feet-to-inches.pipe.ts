import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feetToInches'
})
export class FeetToInchesPipe implements PipeTransform {

  transform(value: number): number {
    return value * 12;
  }

}
