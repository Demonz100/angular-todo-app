import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkMin'
})
export class CheckMinPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return value > 1 ? `${value} minutes` : `${value} minute`;
  }
}
