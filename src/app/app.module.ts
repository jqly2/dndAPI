import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SpellComponent } from './spell/spell.component';
import { AppRoutingModule } from './/app-routing.module';
import { SpellFilter } from './spell/spell.filter';


@NgModule({
  declarations: [
    AppComponent,
    SpellComponent,
    SpellFilter,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
