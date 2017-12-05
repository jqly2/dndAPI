import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // tslint:disable-next-line:member-ordering
  title = 'the Compendium';

  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

}
