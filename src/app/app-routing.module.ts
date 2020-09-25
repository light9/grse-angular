import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphabetRusComponent } from './alphabet-rus/alphabet-rus.component';
import { AlphabetEngComponent } from './alphabet-eng/alphabet-eng.component';

const routes: Routes = [
  { path: 'rus', component: AlphabetRusComponent },
  { path: 'eng', component: AlphabetEngComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
