import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Spell } from './spell';

@Injectable()
export class DnDataService {

  constructor(private http: Http) { }

  spells;
  search = new Array();

  getAllSpellData() {
    this.spells = this.http.get('assets/dnd_spells/spells.json')
      .map((res: Response) => res.json().jsonSpellData);
    this.spells = this.spells.map((spell) => {
      return spell;
    });
    return this.spells;
  }

  getFilterSpellData(submit, obj) {
    this.search = new Array();
    obj.map((data) => {
      if (data.name.toLowerCase().includes(submit)) {
        this.search.push(data);
      }
    });
      if (this.search === undefined) {
        return [];
      }else {
        return this.spells = this.search;
      }
  }
}

