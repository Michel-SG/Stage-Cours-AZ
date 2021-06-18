import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subArray'
})
export class SubArrayPipe implements PipeTransform {

  transform(value: number[], ...args: number[]): number[] {
    const start = args[0] ?? 0;
    const end = args[1] ?? value.length;
    return value.slice(start, end);
  }

}
