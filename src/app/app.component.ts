import { Component } from '@angular/core';
import {DnDataService} from './dn-data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[DnDataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  spells: string;

  constructor(private http:HttpClient, private dataService: DnDataService) {}


  

  getSpells() {
    this.dataService.getSpellData().subscribe((data) => {
      console.log(data);
      this.spells = data;
    })
  }

  title = 'the Library';
}