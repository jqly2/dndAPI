import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class DnDataService {

  constructor(private http: Http) { }

  spells;

  getAllSpellData() {
    console.log('service');
    this.spells = this.http.get('assets/dnd_spells/spells.json')
      .map((res: Response) => res.json().jsonSpellData);
    this.spells = this.spells.map((spell) => {
      spell.state = 'small';
      return spell;
    });
    console.log(this.spells);
    return this.spells;
  }

  getSpellData(submit) {
    this.spells = this.http.get('assets/dnd_spells/spells.json')
      .map((res: Response) => res.json().jsonSpellData);
    this.spells = this.spells.map((data) => {
      data.state = 'small';
      if (submit === data.name) {
        return data.name;
      }
    });
    if (this.spells === undefined) {
      return this.spells = {};
    }else {
      return this.spells;
    }
  }
}
