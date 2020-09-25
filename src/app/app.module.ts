import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphabetRusComponent } from './alphabet-rus/alphabet-rus.component';
import { AlphabetEngComponent } from './alphabet-eng/alphabet-eng.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphabetRusComponent,
    AlphabetEngComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AlphabetRusComponent,
    AlphabetEngComponent,
  ],
})
export class AppModule { }
