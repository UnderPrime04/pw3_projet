import { Component } from '@angular/core';
import { BiscoitoComponent } from './biscoito/biscoito.component';
import { FraseComponent } from './frase/frase.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biscoito';
}
