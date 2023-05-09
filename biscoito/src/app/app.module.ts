import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FraseComponent } from './frase/frase.component';
import { BiscoitoComponent } from './biscoito/biscoito.component';

@NgModule({
  declarations: [
    AppComponent,
    FraseComponent,
    BiscoitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
