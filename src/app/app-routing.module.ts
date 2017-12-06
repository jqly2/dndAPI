import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellComponent } from './spell/spell.component';


const routes: Routes = [
  { path: 'spell', component: SpellComponent },
  { path: '', redirectTo: '/spell', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
