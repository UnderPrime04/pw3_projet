import { Component } from '@angular/core';


@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent {

  public mensagens: string[] = [
    "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.",
    "Motivação não é sinónimo de transformação, mas um passo em sua direção.",
    "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.",
    "A inspiração vem dos outros. A motivação vem de dentro de nós.",
    "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.",
    "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",
    "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera.",
    "Acredite em milagres, mas não dependa deles.",
    "A juventude não é uma época da vida, é um estado de espírito",
    "Realize o óbvio, pense no improvável e conquiste o impossível."
  ];

  sorteio(){
    const index = Math.floor(Math.random() * this.mensagens.length);
    return this.mensagens[index];

}
}
