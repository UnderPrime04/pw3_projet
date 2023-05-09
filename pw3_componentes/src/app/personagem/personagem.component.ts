import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent {

  constructor() { }

  @Input() nome: string = '';
  @Input() varinha: string = '';
  @Input() ehBruxo: boolean = true;
  @Input() nivel : number = 0;

}
