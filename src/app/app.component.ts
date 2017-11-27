import { Component } from '@angular/core';
import { DnDataService } from './dn-data.service';
import { HttpClient } from '@angular/common/http';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations'
import { animation } from './animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[DnDataService],
  styleUrls: ['./app.component.css'],
  animations:[animation],
})
export class AppComponent{

  spells: boolean = false;

  state: string = '';

  show: boolean = true;

  selected: {};

  constructor(private http:HttpClient, private dataService: DnDataService) {}

  getSpells() {
    this.show = true;
    this.selected = {};
    this.dataService.getSpellData().subscribe((data) => {
      console.log(data);
      this.spells = data;
      this.spells = this.spells.map((spell)=> {
        spell.state = 'small';
        spell.show = true;
        return spell;
      })
    })

  }

  zoomCard(index){

    index.state = (index.state === 'small' ? 'large' : 'small');

    if(index.state === 'large'){
      this.selected = index;
      this.show = false;      
    }
    else{
      this.show = true;
      this.selected = {};
    }

      
  }


  title = 'the Library';
}