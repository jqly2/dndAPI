import { Pipe, PipeTransform } from '@angular/core';
import { DnDataService } from '../dn-data.service';
import { HttpClient } from '@angular/common/http';
@Pipe({
    name: 'filter'
})
export class SpellFilter implements PipeTransform {
    spells: [{}];
    constructor(private http: HttpClient, private dataService: DnDataService) { }
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }

        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        items = this.dataService.getFilterSpellData(searchText, items);
        console.log(items);
        return items;
    }
}
