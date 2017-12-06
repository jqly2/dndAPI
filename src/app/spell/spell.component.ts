import { Component, OnInit } from '@angular/core';
import { DnDataService } from '../dn-data.service';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { animation } from '../animation';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Spell } from '../spell';


@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  providers: [DnDataService],
  styleUrls: ['./spell.component.css'],
  animations: [animation],
})
export class SpellComponent implements OnInit {

  all;

  spells: Spell[];

  error;

  state = '';

  show = true;

  selected: {};

  constructor(private http: HttpClient, private dataService: DnDataService) { }

  ngOnInit() {
    this.getSpells();
  }

  getSpells() {
    this.show = true;
    this.selected = {};
    this.dataService.getAllSpellData().subscribe((data) => {
      console.log(data);
      this.spells = data;
    });

  }

  zoomCard(index) {

    index.state = (index.state === 'small' ? 'large' : 'small');

    if (index.state === 'large')
    // tslint:disable-next-line:one-line
    {
      this.selected = index;
      this.show = false;
    }
    // tslint:disable-next-line:one-line
    else {
      this.show = true;
      this.selected = {};
    }
  }
}
