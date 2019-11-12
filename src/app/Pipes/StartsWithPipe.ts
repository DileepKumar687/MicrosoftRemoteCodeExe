import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'startsWithA',
    pure:false
})
export class StartWithPipe implements PipeTransform{
    transform(value: any[]) {
       return value.filter(x => x.name[0]=='A');
    }

}