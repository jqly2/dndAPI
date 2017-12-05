import { Component, OnInit } from '@angular/core';
import { DnDataService } from '../dn-data.service';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { animation } from '../animation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [DnDataService],
  styleUrls: ['./dashboard.component.css'],
  animations: [animation],
})
export class DashboardComponent implements OnInit {

  all;

  spells;

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

  getSpell(submit) {
    this.dataService.getSpellData(submit).subscribe((data) => {
      if (data !== {}) {
        this.spells = data;
        this.show = false;
        return this.selected = {};
      } else {
        this.error = 'This is not a spell.';
      }
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
