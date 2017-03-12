import { Pipe,Injectable ,PipeTransform}  from '@angular/core';
@Pipe({
    name: 'filterPins',
    pure: false
})
@Injectable()
export default class FilterPins implements PipeTransform {
    transform(items: any[], args: any): any {
        // filter items array, items which match and retur
    
        //n true will be kept, false will be filtered 
        if(args==undefined)
           return items;

        return items.filter(item => item.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
    }
}