import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()
export class DnDataService {

  constructor(private http: Http) { }

  getSpellData() {
    return this.http.get("assets/dnd-spells/spells.json")
      .map((res:Response) => res.json().jsonSpellData);
  }

}
