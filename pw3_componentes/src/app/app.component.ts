import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3_componentes';

  personagens = [
    {"nome":"Harry Potter", "varinha": "Pena de Fenix", "ehBruxo":true, "nivel":1},
    {"nome":"Hermione Granger", "varinha": "Videira", "ehBruxo":true, "nivel":0},
    {"nome":"Jorgin", "varinha": "Carvalho Inglês", "ehBruxo":false, "nivel":1},
    {"nome":"Dobby", "varinha": "", "ehBruxo":false, "nivel":1}
  ];
}
