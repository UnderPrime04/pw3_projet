import { Component } from '@angular/core';
import { FraseComponent } from '../frase/frase.component';


@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {

  biscoito="../assets/biscoito.png";

  ocultar = true;
  desabilitarB = false;

  quebrarBiscoito(){
    this.biscoito ="../assets/biscoito-aberto.png";
    this.ocultar = false;
    this.desabilitarB = true;
  }

}
