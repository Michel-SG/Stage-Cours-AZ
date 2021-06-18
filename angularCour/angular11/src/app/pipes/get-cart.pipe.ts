import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCart'
})
export class GetCartPipe implements PipeTransform {

  transform(value: unknown, ...args: number[]): string {
    let position = args[0] ?? 0;
    return value[position];
    // if(args[0] ==null || args[0] ==undefined){
    //   return value[0];
    // }else{
    //   let position = args[0];
    //   return value[position];
    // }
    
  }

}
