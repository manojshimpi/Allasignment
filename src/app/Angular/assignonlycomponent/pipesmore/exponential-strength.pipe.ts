import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform1(value: number, exponent?: number): number  {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

  transform(value: string, Gender: string): string  
  {
      if(Gender=='Male')
      return "Mrs. "+value; 
      else
      return "Miss. "+value; 
   }

}
