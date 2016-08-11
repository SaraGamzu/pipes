import {Pipe, PipeTransform} from '@angular/core';

@Pipe( {
  name:'percent'
})

export class PercentPipe implements PipeTransform{
        transform(value:number, divided:any, round:boolean):number{
            round = round || false;
            divided = divided || 100;
            if(isNaN(value) || !Number(value)) return value;
            let persentResult =  round ? Math.round((value / divided) * 100) : (value / divided) * 100;          
            return persentResult;
        }
}
